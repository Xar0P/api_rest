import dotenv from 'dotenv';
import express from 'express';
import homeRoutes from './src/routes/home';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use(homeRoutes);
  }
}

// Exportando o express
export default new App().app;
