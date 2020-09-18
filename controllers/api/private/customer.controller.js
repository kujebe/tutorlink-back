const Customer = require("../../../models/Customer.model");
const Teacher = require("../../../models/Teacher.model");

exports.getCustomerDashboardData = (req, res, next) => {
  const user = req.params.userId;
  Customer.findOne({ user })
    .populate("user", [
      "fullname",
      "email",
      "lastLogin",
      "loginCount",
      "role",
      "status",
      "createdAt",
    ])
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

exports.getTeacherForTransaction = (req, res, next) => {
  const teacherId = req.params.teacherId;
  Teacher.findById(teacherId)
    .exec()
    .then((result) => {
      res.status(200).json({
        status: "ok",
        data: {
          id: result._id,
          fullname: result.firstname + " " + result.lastname,
          profilePhoto: result.profile,
        },
        message: "successful",
      });
    })
    .catch((err) => {
      next(err);
    });
};
