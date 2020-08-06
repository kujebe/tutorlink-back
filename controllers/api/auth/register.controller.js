const User = require("../../../models/User.model");

exports.registerController = (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        res.status(409).json({ message: "User with same already exist" });
      } else {
        const { email, password, role } = req.body;
        const user = new User({
          email: email,
          password: password,
          role: role,
          status: role === "client" ? 1 : 0, //Activate user is it's client
        });
        user
          .save()
          .then((result) => {
            console.log(result);
            res
              .status(201)
              .json({ user: result, message: "User registered successfully" });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      }
    });
};
