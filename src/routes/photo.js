import { Router } from 'express';
import multer from 'multer';

import photoController from '../controllers/Photo';
import multerConfig from '../config/multer';

const upload = multer(multerConfig);

const router = new Router();

router.post('/photos/', upload.single('photo'), photoController.store);

export default router;
