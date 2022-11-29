import dotenv from 'dotenv'

import EmailService from '../services/email.service'
dotenv.config()

class EmailController {
  async send (req, res) {
    try {
      const { to, name } = req.body

      if (!to) {
        return res.status(400).json({
          message: 'email required'
        })
      }

      await EmailService.sendEmail(to, name)
      return res.status(200).json({
        message: 'Mail Sent'
      })
    } catch (err) {
      return res.status(500).json({
        message: err
      })
    }
  }
}

export default new EmailController()
