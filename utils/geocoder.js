const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "google",
  // apiKey: "TqbklyNOC6Z6F8KLVmNAOq9q1cUoLAM5",
  apiKey: "AIzaSyAbbHtVz-rXG7NoLC9va-cXTgZhsd4jpsI",
  formatter: null,
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
