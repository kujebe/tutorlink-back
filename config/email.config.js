const nodemailer = require("nodemailer");
const {
  smtp_host,
  smtp_port,
  smtp_username,
  smtp_password,
} = require("./variables");

const mailTransport = nodemailer.createTransport({
  host: smtp_host,
  port: smtp_port,
  auth: {
    user: smtp_username,
    pass: smtp_password,
  },
});

const mailHelperOptions = (recipients, subject, template) => {
  return {
    from: process.env.APP_NAME + "<" + process.env.EMAIL_SENDER + ">", // sender address
    to: recipients.join(", "),
    subject: subject,
    html: template,
    debug: true, // show debug output
    logger: true, // log information in console
  };
};

module.exports = { mailTransport, mailHelperOptions };
