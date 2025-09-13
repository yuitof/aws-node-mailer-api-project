const nodemailer = require("nodemailer");

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'apikey',
    pass: process.env.API_KEY,
  },
});

// Wrap in an async IIFE so we can use await.
exports.sendEmail = async (data) => {
  try {
    const info = await transporter.sendMail({
      from: "test@yuitof.com",
      to: process.env.MY_ADDRESS,
      subject: "aws-node-mailer-api notification",
      text: JSON.stringify(data), // plain‑text body
      html: `<p>${JSON.stringify(data)}</p>`, // HTML body
    });
    console.log(data.message);
    return info
  } catch (error) {
    throw new Error('Failed to send email. (in api)');
  }
}