const mongoose = require("mongoose");
const geocoder = require("../utils/geocoder");

const StoreSchema = mongoose.Schema(
  {
    storeId: {
      type: String,
      required: [true, "Please add a store ID"],
      unique: true,
      trim: true,
      maxlength: [10, "Store ID must be less than 10 characters"],
    },
    address: {
      type: String,
      required: [true, "Please add address"],
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        //   required: true,
      },
      coordinates: {
        type: [Number],
        // index: "2dsphere",
      },
      formattedAddress: String,
    },
  },
  { timestamps: true }
);

StoreSchema.index({ location: "2dsphere" });

//Geocode create location
StoreSchema.pre("save", async function (next) {
  const loc = await geocoder.geocode(this.address);
  console.log("Locationtype: ", loc);
  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
  };
  // this.index({ location: "2dsphere" });
  //do not save address into the database
  this.address = undefined;
  next();
});

module.exports = mongoose.model("Store", StoreSchema);
