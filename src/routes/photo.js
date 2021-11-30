import { Router } from 'express';

import photoController from '../controllers/Photo';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/photos/', loginRequired, photoController.store);

export default router;
