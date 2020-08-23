const nodemailer = require("nodemailer");

const mailTransport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  logger: false,
  debug: false,
});

const mailHelperOptions = (recipients, subject, template) => {
  return {
    from: process.env.APP_NAME + "<" + process.env.EMAIL_SENDER + ">", // sender address
    to: recipients.join(", "),
    subject: subject,
    html: template,
  };
};

module.exports = { mailTransport, mailHelperOptions };
