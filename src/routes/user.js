import { Router } from 'express';
import userController from '../controllers/User';

const router = new Router();

router.post('/users/', userController.store);
router.get('/users/', userController.index);
router.get('/users/:id', userController.show);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

export default router;
