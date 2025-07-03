import { Router } from 'express';
import { sapController } from '../controllers/sapController';

const router = Router();

router.post('/login', sapController.loginSapSession);

export default router;
