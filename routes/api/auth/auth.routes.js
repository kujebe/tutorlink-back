const authRouter = require("express").Router();
const {
  register,
} = require("../../../controllers/api/auth/register.controller");

authRouter.post("/register", register);

module.exports = authRouter;
