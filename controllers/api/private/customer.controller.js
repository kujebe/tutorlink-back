const Customer = require("../../../models/Customer.model");

const { Unauthorized } = require("../../../helpers/errors");

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
  const paymentData = req.body;
  Customer.findOne({ user: paymentData.userId })
    .exec()
    .then((customer) => {
      const newTransaction = {
        user: paymentData.userId,
        teacher: paymentData.teacher,
        amount: paymentData.amount,
        startPeriod: paymentData.startPeriod,
        endPeriod: paymentData.endPeriod,
        transactionStatus: paymentData.transactionStatus,
        transactionRef: paymentData.transactionRef,
      };
      customer.transactions.push(newTransaction);
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
