import dotenv from 'dotenv'

import path from 'path'
import nodemailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'
dotenv.config()

class EmailService {
  async sendEmail(name, mail) {
    try {
      const transporter = nodemailer.createTransport({
        service: process.env.MAIL_SERVICE,
        host: process.env.MAIL_HOST,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        },
        secure: true
      })

      const handlebarOptions = {
        viewEngine: {
          extName: '.handlebars',
          partialsDir: path.resolve('./src/views'),
          defaultLayout: false
        },
        viewPath: path.resolve('./src/views/emails/default'),
        extName: '.handlebars'
      }
      transporter.use('compile', hbs(handlebarOptions))

      const mailOptions = {
        from: process.env.MAIL_USER,
        to: mail,
        subject: 'Thanks for subscribe',
        template: 'default',
        context: {
          name,
          to: mail
        },
        attachments: [{
          filename: 'image-1.png',
          path: './src/views/emails/default/images/image-1.png',
          cid: 'image-1'
        }, {
          filename: 'image-2.png',
          path: './src/views/emails/default/images/image-2.png',
          cid: 'image-2'
        }]
      }

      transporter.sendMail(mailOptions, function (error) {
        if (error) {
          return console.log(error)
        }
      })
    } catch (err) {
      return console.log(err)
    }
  }
}

export default new EmailService()
