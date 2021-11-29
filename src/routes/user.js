import { Router } from 'express';
import userController from '../controllers/User';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/users/', userController.index);
router.get('/users/:id', userController.show);

router.post('/users/', userController.store);
router.put('/users/', loginRequired, userController.update);
router.delete('/users/', loginRequired, userController.delete);

export default router;
