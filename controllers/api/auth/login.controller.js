const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../../models/User.model");
const {
  Unauthorized,
  UnprocessableEntity,
} = require("../../../helpers/errors");

exports.loginController = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new UnprocessableEntity("Email or password cannot be empt");
  }
  User.find({ email: email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        throw new Unauthorized("Unauthorized");
      }
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (err) {
          throw new Unauthorized("Unauthorized");
        }
        if (result) {
          const token = jwt.sign(
            { userId: user[0]._id, email: user[0].email, role: user[0].role },
            process.env.JWT_KEY,
            { expiresIn: "1h" }
          );
          return res
            .status(200)
            .json({ token, message: "Authentication successful" });
        }
        throw new Unauthorized("Unauthorized");
      });
    })
    .catch((err) => {
      next(err);
    });
};
