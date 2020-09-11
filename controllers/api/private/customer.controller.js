const Customer = require("../../../models/Customer.model");

exports.getDashboardData = (req, res, next) => {
  const user = req.body.user;
  Customer.findOne({ user })
    .populate("user")
    .exec()
    .then((returnedUser) => {
      res.status(200).json({
        status: "ok",
        data: returnedUser,
        message: "Fetch saved successfully",
      });
    });
};

exports.saveTransaction = (req, res, next) => {
  Customer.findOne({ user: req.body.user })
    .exec()
    .then((customer) => {
      customer.transactions.push({ ...req.body });
      customer
        .save()
        .then((customerTnx) => {
          res.status(201).json({
            status: "ok",
            data: customerTnx,
            message: "Payment saved successfully",
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
