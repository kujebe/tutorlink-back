const {
  getUserIdFromSession,
} = require("../controllers/api/auth/login.controller");

const checkAuth = (req, res, next) => {
  const { authorization } = req.headers;
  getUserIdFromSession(authorization)
    .then((data) => {
      next();
    })
    .catch((err) => next(err));
};

module.exports = checkAuth;
