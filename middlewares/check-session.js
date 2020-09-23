const {
  checkSessionPromise,
} = require("../controllers/api/auth/login.controller");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  checkSessionPromise(authorization)
    .then(() => {
      next();
    })
    .catch((err) => next(err));
};
