const {
  getUserIdFromSession,
} = require("../controllers/api/auth/login.controller");

const checkSession = (req, res, next) => {
  const { authorization } = req.headers;
  getUserIdFromSession(authorization)
    .then((data) => {
      next();
    })
    .catch((err) => next(err));
};

module.exports = checkSession;
