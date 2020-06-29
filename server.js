const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const connectDb = require("./config/db");

//Import routes
const homePageRouter = require("./routes/api/public-routes/home-page.route");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

//Connect to database
connectDb();

const app = express();
const port = process.env.PORT || 5000;
/** Set up middlewares */
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
/** Routes */
app.use("/api/v1/home", homePageRouter);
/** End routes */

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
