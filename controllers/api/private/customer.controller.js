const Customer = require("../../../models/Customer.model");

exports.getDashboardData = (req, res, next) => {
  Customer.findOne({ user: req.body.user })
    .populate("user")
    .exec()
    .then((user) => {
      res.status(200).json({
        status: "ok",
        data: user,
        message: "Ftech saved successfully",
      });
    });
};

exports.saveTransaction = (req, res, next) => {
  Customer.findOne({ user: req.body.userId })
    .exec()
    .then((customer) => {
      const newTransaction = {
        user: req.body.userId,
        teacher: req.body.teacher,
        amount: req.body.amount,
        startPeriod: req.body.startPeriod,
        endPeriod: req.body.endPeriod,
        transactionStatus: req.body.transactionStatus,
        transactionRef: req.body.transactionRef,
      };
      customer.transactions.push(newTransaction);
      customer
        .save()
        .then((newCustomer) => {
          res.status(201).json({
            status: "ok",
            data: newCustomer,
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
