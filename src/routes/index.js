import express from 'express'
import home from './home.routes'
import email from './email.routes'

const router = express.Router()

router.use(home)
router.use(email)

export default router
