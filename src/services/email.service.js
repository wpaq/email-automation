import nodemailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'

import NodemailerConfig from '../configs/nodemailer.config'
import HandlebarConfig from '../configs/handlebars.config'

class EmailService {
  async sendEmail(name, mail) {
    try {
      const transporter = nodemailer.createTransport(NodemailerConfig)
      const mailOptions = {
        from: process.env.SMTP_USER,
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

      transporter.use('compile', hbs(HandlebarConfig))
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