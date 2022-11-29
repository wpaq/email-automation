import express from 'express'
import controller from '../controllers/home.controller'

const router = express.Router()

router.get('/', controller.index)

export default router
