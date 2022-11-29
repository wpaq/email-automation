import dotenv from 'dotenv'

import EmailService from '../services/email.service'
dotenv.config()

class EmailController {
  async send(req, res) {
    try {
      const { name, mail } = req.body

      if (!name) {
        return res.status(400).json({
          message: 'Name is required'
        })
      }

      if (!mail) {
        return res.status(400).json({
          message: 'Email is required'
        })
      }

      await EmailService.sendEmail(name, mail)

      return res.status(200).json({
        message: 'Mail sent!'
      })
    } catch (err) {
      return res.status(500).json({
        message: err
      })
    }
  }
}

export default new EmailController()
