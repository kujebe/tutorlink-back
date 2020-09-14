const mongoose = require("mongoose");
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

const children = new Schema(
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
    profilePhoto: String,
    ratings: Number,
    address: {
      type: String,
    },
    children: [children],
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

module.exports = mongoose.model("Customer", CustomerSchema);
