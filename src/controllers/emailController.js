import dotenv from 'dotenv';
dotenv.config();

import path from 'path'
import nodemailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'

class EmailController {
  async send(req, res) {
    try {
      const { to } = req.body

      const transporter = nodemailer.createTransport({
        service: process.env.MAIL_SERVICE,
        host: process.env.MAIL_HOST,
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

      const mailOptions = {
        from: process.env.MAIL_USER,
        to: to,
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
          res.status(200).send({ message: 'Email sent', info })
        }
      });
    } catch (err) {
      console.log(err)
    }
  }
}

export default new EmailController()
