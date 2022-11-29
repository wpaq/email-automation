import dotenv from 'dotenv'

import cors from 'cors'
import helmet from 'helmet'
import express from 'express'
import routes from './routes'
dotenv.config()

class App {
  constructor () {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.app.use(cors())
    this.app.use(helmet())

    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
    this.app.use(express.static('public'))
    this.app.set('view engine', 'ejs')
    this.app.set('views', './src/views')
  }

  routes () {
    this.app.use('/', routes)
    this.app.use('*', function (req, res) {
      res.status(404).json({
        message: 'page not found'
      })
    })
  }
}

export default new App().app
