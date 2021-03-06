const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const connectDb = require("./config/db.config");
const morgan = require("morgan");
const handleErrors = require("./middlewares/error-handler"); // Custome error
const checkSession = require("./middlewares/check-session");

// if (process.env.NODE_ENV !== "production") require("dotenv").config();
require("dotenv").config();

//Connect to database
connectDb();

//Import routes
const homePageRouter = require("./routes/api/public/home-page.route");
const teachersRouter = require("./routes/api/public/teachers.route");
const authRouter = require("./routes/api/auth/auth.routes");
const customerRouter = require("./routes/api/private/customer.route");

const app = express();
app.use(morgan("combined"));
const port = process.env.PORT || 5000;
/** Set up middlewares */
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/**  Public routes */
app.use("/api/v1/home", homePageRouter);
app.use("/api/v1/teachers", teachersRouter);
/** End public routes */
/** Auth routes  */
app.use("/api/v1/auth", authRouter);
/** End auth routes */
/** Customer routes */
app.use("/api/v1/customer", checkSession, customerRouter);
// app.use("/api/v1/checkout", checkSession, checkoutRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
//Error handler middleware
app.use(handleErrors);

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`App listening on port ${port}`);
});
