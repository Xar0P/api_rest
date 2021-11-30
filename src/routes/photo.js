import { Router } from 'express';

import photoController from '../controllers/Photo';

const router = new Router();

router.post('/photos/', photoController.store);

export default router;
