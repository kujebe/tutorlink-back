const authRouter = require("express").Router();

const {
  registerController,
} = require("../../../controllers/api/auth/register.controller");
const {
  loginController,
} = require("../../../controllers/api/auth/login.controller");

authRouter.post("/register", registerController);
authRouter.post("/login", loginController);

module.exports = authRouter;
