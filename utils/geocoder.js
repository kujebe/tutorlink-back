const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "google",
  // apiKey: "TqbklyNOC6Z6F8KLVmNAOq9q1cUoLAM5",
  apiKey: "AIzaSyAbbHtVz-rXG7NoLC9va-cXTgZhsd4jpsI",
  // apiKey:
  //   "pk.eyJ1Ijoic3NuZ3RlY2hsYWJzIiwiYSI6ImNrY3owOXpuZzA4bWIyeW83a2s3OW1qcjUifQ._w4L8WUK5FjnqrK-p4a9hw",
  formatter: null,
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
