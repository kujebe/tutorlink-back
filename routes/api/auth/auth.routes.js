const authRouter = require("express").Router();

const {
  registerController,
} = require("../../../controllers/api/auth/register.controller");
const {
  loginController,
} = require("../../../controllers/api/auth/login.controller");
const forgotPasswordController = require("../../../controllers/api/auth/forgot-password.controller");
const resetPasswordController = require("../../../controllers/api/auth/reset-password.controller");

authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
authRouter.post("/forgot-password", forgotPasswordController);
authRouter.post("/reset-password", resetPasswordController);

module.exports = authRouter;
