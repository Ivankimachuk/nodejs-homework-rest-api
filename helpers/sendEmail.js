const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD, META_USER } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: META_USER,
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = (data) => {
  const email = { ...data, from: META_USER };
  return transport.sendMail(email);
};

module.exports = sendEmail;
