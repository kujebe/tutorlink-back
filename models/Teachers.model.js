const mongoose = require("mongoose");
const geocoder = require("../utils/geocoder");

const TeacherSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please provide first name"],
    },
    lastname: {
      type: String,
      required: [true, "Please provide last name"],
    },
    email: {
      type: String,
      required: [true, "Please provide email address"],
      unique: true,
    },
    classes: [String],
    address: {
      type: String,
      required: [true, "Please add address"],
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
        // index: "2dsphere",
      },
      formattedAddress: String,
    },
    gender: String,
    experience: String,
    education: [String],
    skills: {
      type: Array,
      subject: {
        type: String,
      },
      experience: { type: String },
    },
    memberSince: Date,
  },
  { timestamps: true }
);

TeacherSchema.index({ location: "2dsphere" });

//Geocode create location
TeacherSchema.pre("save", async function (next) {
  const loc = await geocoder.geocode(this.address);
  console.log("Locationtype: ", loc);
  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
  };
  //do not save address into the database
  // this.address = undefined;
  next();
});

module.exports = mongoose.model("Teacher", TeacherSchema);
