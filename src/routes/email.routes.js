import express from 'express'
import controller from '../controllers/email.controller'

const router = express.Router()

router.post('/email/send/', controller.send)

export default router
