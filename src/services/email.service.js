import nodemailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'
import { MissingParamError } from "../utils/errors/index";

import nodemailerConfig from '../configs/nodemailer.config'
import handlebarConfig from '../configs/handlebars.config'

class EmailService {
  async sendEmail(receiverName, receiverEmail) {
    try {
      if (!receiverName) {
        throw new MissingParamError('receiverName')
      }
      if (!receiverEmail) {
        throw new MissingParamError('receiverEmail')
      }

      const transporter = nodemailer.createTransport(nodemailerConfig)
      const mailOptions = {
        from: process.env.SMTP_USER,
        to: receiverEmail,
        subject: 'Thanks for subscribe',
        template: 'default',
        context: {
          name: receiverName,
          to: receiverEmail
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

      transporter.use('compile', hbs(handlebarConfig))
      transporter.sendMail(mailOptions)
    } catch (err) {
      return console.log(err)
    }
  }
}

export default new EmailService()