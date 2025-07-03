import { Router } from 'express';
import authRoutes from './authRoutes';
import sapRoutes from './sapRoutes';

const router = Router();

router.get('/health', (req, res) => {
  res.send('OK 🚀');
});

router.use('/auth', authRoutes);
router.use('/sap', sapRoutes);

export default router;
