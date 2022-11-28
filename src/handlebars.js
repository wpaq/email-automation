require('dotenv').config()

const path = require('path')
var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  },
  secure: true
});

const handlebarOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve('./views'),
    defaultLayout: false,
  },
  viewPath: path.resolve('./src/views/emails/default'),
  extName: ".handlebars",
}

transporter.use('compile', hbs(handlebarOptions));

var mailOptions = {
  from: 'wpaqdev@gmail.com',
  to: 'wpaqdev@gmail.com',
  subject: 'Sending Email using Node.js',
  template: 'index',
  context: {
    title: 'Title Here',
    text: "Lorem ipsum dolor sit amet, consectetur..."
  },
  attachments: [{
    filename: 'image-1.png',
    path: __dirname + '/views/emails/default/images/image-1.png',
    cid: 'image-1' //my mistake was putting "cid:logo@cid" here! 
  }, {
    filename: 'image-2.png',
    path: __dirname + '/views/emails/default/images/image-2.png',
    cid: 'image-2' //my mistake was putting "cid:logo@cid" here! 
  }]
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});