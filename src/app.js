require('dotenv').config()

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  }
});

const mailOptions = {
  from: 'wpaqdev@gmail.com',
  to: 'wpaqdev@gmail.com',
  subject: 'Subject',
  text: 'Teste de Email'
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});