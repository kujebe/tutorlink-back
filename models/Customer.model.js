const mongoose = require("mongoose");
mongoose.set("toJSON", { virtuals: true });
const Schema = mongoose.Schema;
const TeacherSchema = require("./Teacher.model");

const TransactionSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    teacher: { type: Schema.Types.ObjectId, ref: "Teacher" },
    amount: { type: Number },
    startDate: { type: Date },
    endDate: { type: Date },
    transactionStatus: { type: String },
    transactionRef: { type: String },
    TransactionMessage: String,
  },
  { timestamps: true }
);

const SocialAcountsSchema = new Schema(
  {
    socialMediaType: String,
    socialAcountUrl: String,
  },
  { timestamps: true }
);

const customerChildren = new Schema(
  {
    childName: String,
    childClass: String,
    ChildAge: Number,
    childSchool: String,
  },
  { timestamps: true }
);

const CustomerSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    telephone: Array,
    profilePhoto: String,
    ratings: Number,
    address: String,
    customerChildren: [customerChildren],
    socialAccounts: [SocialAcountsSchema],
    transactions: [TransactionSchema],
  },
  { timestamps: true }
);

CustomerSchema.pre("save", function (next) {
  const thisTransaction = this.transactions[this.transactions.length - 1];
  if (this.isModified("transactions")) {
    TeacherSchema.findById(thisTransaction.teacher).then((teacherTxn) => {
      teacherTxn.transactions.push(thisTransaction);
      teacherTxn
        .save()
        .then(() => next())
        .catch((error) => next(error));
    });
  } else {
    next();
  }
});

CustomerSchema.virtual("dashboardTopData").get(function () {
  return {
    fullname: this.user.fullname,
    profilePhoto: this.profilePhoto,
    ratings: this.ratings,
    address: this.address,
    loginCount: this.user.loginCount,
    email: this.user.email,
    telephone: this.telephone,
    social: this.socialAccounts,
    numberOfChildren: this.customerChildren.length,
    status: this.user.status,
    dateJoined: this.user.createdAt,
    lastLogin: this.user.lastLogin,
  };
});

// CustomerSchema.virtual("vuser", {
//   ref: "User",
//   localField: "user",
//   foreignField: "_id",
//   justOne: true,
// });

module.exports = mongoose.model("Customer", CustomerSchema);
