const Customer = require("../../../models/Customer.model");
const Teacher = require("../../../models/Teacher.model");
const User = require("../../../models/User.model");

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
    .then((customerData) => {
      res.status(200).json({
        status: "ok",
        data: customerData,
        message: "Fetch successfully",
      });
    })
    .catch((err) => {
      next(err);
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

exports.saveNewTelephone = (req, res, next) => {
  const { user, telephone } = req.body;
  Customer.findOne({ user: user })
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
    .then((customer) => {
      customer.telephone.push(telephone);
      customer
        .save()
        .then(() => {
          res.status(201).json({
            status: "ok",
            data: customer,
            message: "Phone number saved successfully",
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

exports.updatePhoneNumber = (req, res, next) => {
  const { user, phoneNumber, index } = req.body;

  Customer.findOne({ user: user })
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
    .then((customer) => {
      customer.telephone.splice(index, 1, phoneNumber);
      customer
        .save()
        .then((customer) => {
          res.status(201).json({
            status: "ok",
            data: customer,
            message: "Phone number updated successfully",
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

exports.deletePhoneNumber = (req, res, next) => {
  const { user, phoneNumber } = req.body;
  Customer.findOne({ user: user })
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
    .then((customer) => {
      const filterePhoneList = customer.telephone.filter(
        (phone) => phone !== phoneNumber
      );
      customer.telephone = filterePhoneList;
      customer
        .save()
        .then((customer) => {
          res.status(201).json({
            status: "ok",
            data: customer,
            message: "Phone number saved successfully",
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

exports.updateProfilePhoto = (req, res, next) => {
  const { user } = req.body;
  Customer.findOne({ user: user })
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
    .then((customer) => {
      customer.profilePhoto = req.file.filename;
      customer
        .save()
        .then(() => {
          res.status(201).json({
            status: "ok",
            data: customer,
            message: "Profile photo updated successfully",
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

exports.updateProfile = (req, res, next) => {
  const { user, fullname, address } = req.body;

  Customer.findOne({ user: user })
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
    .then((customer) => {
      customer.saveProfile(fullname, address);
      customer
        .save()
        .then((customer) => {
          res.status(201).json({
            status: "ok",
            data: customer,
            message: "Phone number updated successfully",
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

exports.addChild = (req, res, next) => {
  const { user, token, ...childData } = req.body;
  Customer.findOne({ user: user })
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
    .then((customer) => {
      customer.customerChildren.push({ ...childData });
      customer
        .save()
        .then((customer) => {
          res.status(201).json({
            status: "ok",
            data: customer,
            message: "Child added successfully",
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
