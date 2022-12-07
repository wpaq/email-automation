import 'dotenv/config'

const nodemailerConfig = {
  service: process.env.SMTP_NAME,
  host: process.env.SMTP_HOST,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD
  }
}

export default nodemailerConfig