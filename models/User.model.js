const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    password: {
      type: String,
      required: true,
      match: [
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
        "Password must contain one capital letter",
      ],
      minlength: 8,
    },
    lastLogin: {
      default: Date.now(),
      required: true,
      type: Date,
    },
    loginCount: {
      default: 0,
      type: Number,
    },
    role: {
      type: String,
      required: true,
    },
    status: { type: String },
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  if (this.isNew || this.isModified("password")) {
    const document = this;
    bcrypt.hash(this.password, saltRounds, function (err, hashedPassword) {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

UserSchema.methods.generateUserToken = () => {
  const secret = this.password + "-" + this.createdAt;
  const token = jwt.sign({ userId: this._id }, secret, {
    expiresIn: 3600, // 1 hour
  });
  return token;
};

module.exports = mongoose.model("User", UserSchema);
