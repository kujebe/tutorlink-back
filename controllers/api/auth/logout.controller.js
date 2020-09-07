// const redisClient = require("./login.controller");
const { redisClient } = require("./login.controller");

const logOutController = (req, res, next) => {
  const { token } = req.body;
  try {
    redisClient.del(token, (err, reply) => {
      if (reply) {
        res.status(200).json({
          status: "ok",
          data: { reply },
          message: "User logged out successfully",
        });
      } else {
        res.status(500).json({
          status: "error",
          data: err,
          message: "Not a valid session",
        });
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports = logOutController;
