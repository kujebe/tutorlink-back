const User = require("../../../models/User.model");
const {
  mailTransport,
  mailHelperOptions,
} = require("../../../config/email.config");
const passwordResetEmailTemplate = require("../../../email-templates/password-reset-email.template");
const {
  Unauthorized,
  UnprocessableEntity,
} = require("../../../helpers/errors");

const sendPasswordRecoveryMailController = (req, res, next) => {
  const email = req.body.email;

  if (!email) {
    throw new UnprocessableEntity("Email cannot be empty");
  }

  User.findOne({ email })
    .exec()
    .then((user) => {
      if (!user) {
        throw new Unauthorized("Unauthorized");
      }
      /** If user found, generate token and send email */
      const token = user.generateUserToken();
      mailTransport
        .sendMail(
          mailHelperOptions(
            [user.email], // In case you want to send to send to multiple recipients
            "Reset password instructions for TutorLink account", //Subject
            passwordResetEmailTemplate(user.email, token) //Email template
          )
        )
        .then((info) => {
          res.status(200).json({
            mailInfo: info,
            message: "Password reset email sent successfully",
          });
        })
        .catch((err) => {
          next(err);
        });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = sendPasswordRecoveryMailController;
