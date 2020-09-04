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
        throw new Unauthorized("Incorrect email or password");
      }
      user.loginUser(password, function (err, same, token, user) {
        try {
          if (err) {
            throw new Error(err.message);
          } else if (!same) {
            throw new Unauthorized("Incorrect email or password");
          } else {
            res.status(200).json({
              status: "ok",
              data: { user, token },
              message: "User authenticated successfully",
            });
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
