const authRouter = require("express").Router();

const {
  registerController,
} = require("../../../controllers/api/auth/register.controller");
const {
  loginController,
} = require("../../../controllers/api/auth/login.controller");
const sendPasswordRecoveryMailController = require("../../../controllers/api/auth/send-password-recovery-mail.controller");

authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
authRouter.post("/forgot-password", sendPasswordRecoveryMailController);

module.exports = authRouter;
