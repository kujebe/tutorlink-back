const User = require("../../../models/User.model");
const { UnprocessableEntity, Conflict } = require("../../../helpers/errors");

exports.registerController = (req, res, next) => {
  const { fullname, email, password, password_confirm, role } = req.body;
  if (!fullname || !email || !password) {
    throw new UnprocessableEntity("Email or password cannot be empty");
  }
  if (password !== password_confirm) {
    throw new UnprocessableEntity("Passwors is not the same");
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
        loginCount: role === "customer" ? 1 : 0,
        status: role === "customer" ? 1 : 0, //Activate user if it's client
      });
      newUser
        .save()
        .then((result) => {
          //if customer,send sessionData else if teacher, send verification Emailcustomer
          if (result.role === "customer") {
            res.status(201).json({
              status: "ok",
              data: {
                id: result._id,
                fullname: result.fullname,
                email: result.email,
                role: result.role,
                status: result.status,
                lastLogin: result.lastLogin,
                token: result.generateToken(result._id),
              },
              message: "User registered successfully",
            });
          }
        })
        .catch((err) => {
          next(err);
        });
    })
    .catch((err) => {
      next(err);
    });
};
