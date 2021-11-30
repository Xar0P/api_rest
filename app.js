import dotenv from 'dotenv';
import './src/database';
import express from 'express';

import homeRoutes from './src/routes/home';
import userRoutes from './src/routes/user';
import tokenRoutes from './src/routes/token';
import alunoRoutes from './src/routes/aluno';
import photoRoutes from './src/routes/photo';

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
    this.app.use(tokenRoutes);
    this.app.use(alunoRoutes);
    this.app.use(photoRoutes);
  }
}

// Exportando o express
export default new App().app;
