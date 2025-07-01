import { Router } from 'express';
import authRoutes from './authRoutes';

const router = Router();

router.get('/health', (req, res) => {
  res.send('OK 🚀');
});

router.use('/auth', authRoutes);

export default router;
