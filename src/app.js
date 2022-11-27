require('dotenv').config()

const fs = require('fs')
const path = require('path')

const nodemailer = require("nodemailer");
const mailGun = require('nodemailer-mailgun-transport');
const handlebars = require('handlebars');

const auth = {
  auth: {
    api_key: process.env.MAILGUN_APIKEY,
    domain: process.env.MAILGUN_DOMAIN
  }
}
const nodemailerMailgun = nodemailer.createTransport(mailGun(auth));

const filePath = path.join(__dirname + '/views/index.html');
const source = fs.readFileSync(filePath, 'utf-8').toString();
const template = handlebars.compile(source);
const replacements = {
  username: "Wallyson Pablo"
};
const htmlToSend = template(replacements);

var mailOptions = {
  from: 'wallysonpabloo@gmail.com',
  to: 'wallysonpabloo@gmail.com, ',
  subject: 'Teste email witg HTML',
  html: htmlToSend
};

nodemailerMailgun.sendMail(mailOptions, function (error, response) {
  if (error) {
    console.log(error);
  }
  console.log(response)
});
