const User = require("../../../models/User.model");

exports.registerController = (req, res) => {
  const { email, password, role } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .json({ message: "Email or password cannot be empty" });
  }
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        res.status(409).json({ message: "User with same already exist" });
      } else {
        const user = new User({
          email: email,
          password: password,
          role: role,
          status: role === "client" ? 1 : 0, //Activate user is it's client
        });
        user
          .save()
          .then((result) => {
            res.status(201).json({ message: "User registered successfully" });
          })
          .catch((err) => {
            res.status(500).json(err);
          });
      }
    });
};
