const nodemailer = require("nodemailer");

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
    const htmlMail = `<p>Thank you for sending a message. The submitted form is below.</p><p>from ${data.firstname} ${data.lastname} (${data.email})</p><p>${data.message}</p>`
    const textMail = `Thank you for sending a message. The submitted form is below.\nfrom ${data.firstname} ${data.lastname} (${data.email})\n${data.message}`
    const info = await transporter.sendMail({
      from: `${process.env.SENDER_ADDRESS}`,
      to: `${process.env.RECEIVER_ADDRESS}, ${data.email}`,
      subject: "aws-node-mailer-api notification",
      text: textMail,
      html: htmlMail
    });
    return info;
  } catch (error) {
    console.error(error)
    throw new Error("Error occurred while sending the email.");
  }
}