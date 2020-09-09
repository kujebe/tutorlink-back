const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Customer = require("./Customer.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// mongoose.set("debug", true);

const saltRounds = 10;

const UserSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
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
      default: Date.now,
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
    status: { type: Number, default: 0 },
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  if (this.isNew) {
    if (this.isModified("password")) {
      const document = this;
      bcrypt.hash(this.password, saltRounds, function (err, hashedPassword) {
        if (err) {
          next(err);
        } else {
          document.password = hashedPassword;
          next();
        }
      });
    }
    if (this.role === "customer") {
      Customer.create({
        user: this._id,
      });
    }
  } else {
    next();
  }
});

UserSchema.methods.loginUser = function (password, cb) {
  const doc = this;
  bcrypt.compare(password, this.password, function (err, same) {
    if (err) {
      cb(err);
    } else if (same) {
      const token = doc.generateToken(doc._id);
      //Update last login and login count
      doc.lastLogin = Date.now();
      doc.loginCount++;
      doc.save().then((updatedUser) => {
        cb(err, same, token, (user = updatedUser));
      });
    } else {
      cb(err, same);
    }
  });
};

UserSchema.methods.generateToken = function (userId) {
  return (token = jwt.sign({ userId }, process.env.JWT_KEY));
};

UserSchema.methods.generatePasswordResetToken = function () {
  const secret = this.password + "-" + this.createdAt;
  const token = jwt.sign({ userId: this._id }, secret, {
    expiresIn: "1h", // 1 hour
  });
  return token;
};

module.exports = mongoose.model("User", UserSchema);
