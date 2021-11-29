import { Router } from 'express';
import alunoController from '../controllers/Aluno';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/alunos/', alunoController.index);
router.post('/alunos/', loginRequired, alunoController.store);
router.put('/alunos/:id', loginRequired, alunoController.update);
router.get('/alunos/:id', alunoController.show);
router.delete('/alunos/:id', loginRequired, alunoController.delete);

export default router;
