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

const ForgotPasswordController = (req, res, next) => {
  const email = req.body.email;

  if (!email) {
    throw new UnprocessableEntity("Email cannot be empty");
  }

  User.findOne({ email })
    .exec()
    .then((user) => {
      if (!user) {
        throw new Unauthorized("User does not exist");
      }
      /** If user found, generate token and send email */
      const token = user.generatePasswordResetToken(user._id);
      /** TO-DO => CHECK IF TOKEN RETURNS ERROR OR PASS CALLBACK TO TOKEN METHOD */
      // mailTransport.verify((err, success) => {
      //   if (err) res.json(err);
      //   // res.json("Your config is correct");
      //   return;
      // });
      mailTransport
        .sendMail(
          mailHelperOptions(
            [user.email], // In case you want to send to send to multiple recipients
            "Reset password instructions for TutorLink account", //Subject
            passwordResetEmailTemplate(user._id, user.email, token) //Email template
          )
        )
        .then((info) => {
          res.status(200).json({
            status: "ok",
            mailInfo: info,
            data: {},
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

module.exports = ForgotPasswordController;
