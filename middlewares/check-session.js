const {
  checkSessionPromise,
} = require("../controllers/api/auth/login.controller");

const checkSession = (req, res, next) => {
  const { authorization } = req.headers;
  checkSessionPromise(authorization)
    .then(() => {
      next();
    })
    .catch((err) => next(err));
};

module.exports = checkSession;
