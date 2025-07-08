import { Router } from 'express';
import { sapController } from '../controllers/sapController';
import { sapSessionValidator } from '../middlewares/sapSessionValidator';

const router = Router();

router.post('/login', sapController.loginSapSession);
router.get('/items', sapSessionValidator, sapController.getItems);

router.get('/business-partner/:code', sapSessionValidator, sapController.getBusinessPartnerByCode);
router.get('/business-partner', sapSessionValidator, sapController.getBussinessPartner);

export default router;
