const { GeneralError } = require("../helpers/errors");

module.exports = (err, req, res, next) => {
  if (err instanceof GeneralError) {
    return res.status(err.getCode()).json({
      status: "error",
      message: err.message,
      errors: err,
    });
  }
  return res.status(500).json({
    status: "error",
    message: err.message,
    errors: err.errors ? err.errors : err,
  });
};
