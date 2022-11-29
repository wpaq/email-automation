import express from 'express'
import email from './email.routes'

const router = express.Router()

router.use(email)

export default router
