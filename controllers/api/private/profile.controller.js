exports.getProfile = (req, res) => {
  console.log("Heeeeeeeee!");
  const data = {
    name: "johnson",
    location: "lagos",
  };
  res.status(200).json(data);
};
