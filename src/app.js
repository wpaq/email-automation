import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import emailRoutes from './routes/emailRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());

    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static('public'));
    this.app.use(express.static('public'));
    this.app.set('view engine', 'ejs');
    this.app.set('views', './src/views');
  }

  routes() {
    this.app.use('/email/', emailRoutes);
    this.app.use('*', function (req, res) {
      res.status(404).json({
        message: 'page not found'
      });
    });
  }
}

export default new App().app;