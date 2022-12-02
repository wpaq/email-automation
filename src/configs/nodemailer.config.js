import 'dotenv/config'

const NodemailerConfig = {
  service: process.env.SMTP_NAME,
  host: process.env.SMTP_HOST,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD
  },
  secure: true
}

export default NodemailerConfig