const User = require("../../../models/User.model");
const { UnprocessableEntity, Conflict } = require("../../../helpers/errors");

exports.registerController = (req, res, next) => {
  const { fullname, email, password, role } = req.body;
  if (!fullname || !email || !password) {
    throw new UnprocessableEntity("Email or password cannot be empty");
  }
  User.find({ email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        throw new Conflict("User with same email address already exist");
      }
      const newUser = new User({
        fullname: fullname,
        email: email,
        password: password,
        role: role,
        status: role === "customer" ? 1 : 0, //Activate user if it's client
      });
      newUser
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
            message: "User registered successfully",
          });
        })
        .catch((err) => {
          next(err);
        });
    })
    .catch((err) => {
      next(err);
    });
};
