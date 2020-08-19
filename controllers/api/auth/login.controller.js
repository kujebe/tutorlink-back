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
    throw new UnprocessableEntity("Email or password cannot be empty");
  }

  User.findOne({ email: email })
    .exec()
    .then((user) => {
      if (!user) {
        throw new Unauthorized("Unauthorized");
      }
      user.loginUser(password, function (err, same, token, user) {
        try {
          if (err) {
            throw new Error(err.message);
          } else if (!same) {
            throw new Unauthorized("Unauthorized");
          } else {
            res
              .status(200)
              .json({ user, token, message: "Authentication successful" });
          }
        } catch (error) {
          next(error);
        }
      });
    })
    .catch((err) => {
      next(err);
    });
};
