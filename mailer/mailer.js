const nodemailer = require("nodemailer");
const path = require('path');
const { readHTMLMail, readTextMail } = require('./view/confirmation.js')

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER_URL,
  port: 587,
  secure: false,
  auth: {
    user: 'apikey',
    pass: process.env.API_KEY,
  },
});

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

exports.sendEmail = async (data) => {
  try {
    if (!emailRegex.test(data.email)) {
      throw new Error("Invalid email address");
    }
    const info = await transporter.sendMail({
      from: `${process.env.SENDER_ADDRESS}`,
      to: `${data.email}`,
      bcc: `${process.env.RECEIVER_ADDRESS}`,
      subject: "aws-node-mailer-api notification",
      text: `${readTextMail(data)}`,
      html: `${readHTMLMail(data)}`,
    });
    return info;
  } catch (error) {
    console.error(error)
    throw new Error("Error occurred while sending the email.");
  }
}