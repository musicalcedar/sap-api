import { Router } from 'express';
import { sapController } from '../controllers/sapController';
import { sapSessionValidator } from '../middlewares/sapSessionValidator';

const router = Router();

router.post('/login', sapController.loginSapSession);
router.get('/items', sapSessionValidator, sapController.getItems);

export default router;
