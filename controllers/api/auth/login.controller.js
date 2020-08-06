const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../../models/User.model");

exports.loginController = (req, res) => {
  const { email, password } = req.body;
  User.find({ email: email })
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({ message: "Unauthorized" });
        }
        if (result) {
          const token = jwt.sign(
            { email: user[0].email, userId: user[0]._id },
            process.env.JWT_KEY,
            { expiresIn: "1h" }
          );
          return res
            .status(200)
            .json({ token, message: "Authentication successful" });
        }
        res.status(401).json({ message: "Unauthorized" });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};
