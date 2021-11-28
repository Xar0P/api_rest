import dotenv from 'dotenv';
import './src/database';
import express from 'express';
import homeRoutes from './src/routes/home';
import userRoutes from './src/routes/user';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(homeRoutes);
    this.app.use(userRoutes);
  }
}

// Exportando o express
export default new App().app;
