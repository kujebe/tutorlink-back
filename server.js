const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const connectDb = require("./config/db");
const morgan = require("morgan");

//Import routes
const homePageRouter = require("./routes/api/public/home-page.route");
const teachersRouter = require("./routes/api/public/teachers.route");
const authRouter = require("./routes/api/auth/auth.routes");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

//Connect to database
connectDb();

const app = express();
app.use(morgan("combined"));
const port = process.env.PORT || 5000;
/** Set up middlewares */
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
/**
 * Public routes
 */
app.use("/api/v1/home", homePageRouter);
app.use("/api/v1/teachers", teachersRouter);
/** Public routes */

/**
 * Auth routes
 */
app.use("/api/v1/auth", authRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`App listening on port ${port}`);
});
