import { Router } from 'express';
import tokenController from '../controllers/Token';

const router = new Router();

router.post('/tokens/', tokenController.store);

export default router;
