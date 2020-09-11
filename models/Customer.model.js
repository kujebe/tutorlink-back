const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TeacherSchema = require("./Teacher.model");

const TransactionSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    teacher: { type: Schema.Types.ObjectId, ref: "Teacher" },
    amount: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    transactionStatus: { type: String, required: true },
    transactionRef: { type: String, required: true },
    TransactionMessage: String,
  },
  { timestamps: true }
);

const CustomerSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    address: {
      type: String,
    },
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
