const jwt = require("jsonwebtoken");
const User = require("../../../models/User.model");
const { UnprocessableEntity } = require("../../../helpers/errors");

const resetPasswordController = (req, res, next) => {
  const { userId, token } = req.params;
  const { password } = req.body;

  if (!password) {
    throw new UnprocessableEntity("Password cannot be empty");
  }

  User.findById(userId)
    .exec()
    .then((user) => {
      const secret = user.password + "-" + user.createdAt;
      jwt.verify(token, secret, function (error, decoded) {
        if (error) {
          throw new Error(error.message);
        }
        if (decoded) {
          user.password = password;
          user
            .save()
            .then((result) => {
              userData = {
                _id: result._id,
                email: result.email,
                role: result.role,
                status: result.status,
              };
              res.status(201).json({
                userData,
                message: "Password updated successfully",
              });
            })
            .catch((err) => {
              next(err);
            });
        }
      });
    })
    .catch((error) => {
      next(error);
    });
};

module.exports = resetPasswordController;