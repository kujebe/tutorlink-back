const mongoose = require("mongoose");
const geocoder = require("../utils/geocoder");
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

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
    profile: String,
    education: [String],
    rating: Number,
    slug: {
      type: String,
      slug: ["firstname", "lastname"],
      slug_padding_size: 4,
      unique: true,
    },
    skills: {
      type: Array,
      subject: {
        type: String,
      },
      experience: { type: String },
    },
    teck_skills: {
      type: Array,
      resource: {
        type: String,
      },
      experience: { type: String },
    },
    memberSince: Date,
    transactions: { type: Array },
  },
  { timestamps: true }
);

TeacherSchema.index({ location: "2dsphere" });

// Geocode create location
TeacherSchema.pre("save", async function (next) {
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
  };
  next();
});

module.exports = mongoose.model("Teacher", TeacherSchema);
