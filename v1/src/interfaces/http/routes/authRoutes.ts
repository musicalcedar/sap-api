import { Router } from 'express';
import passport from 'passport';
import { authController } from '../controllers/authController';

const router = Router();

router.post('/login', passport.authenticate('local', { session: false }), authController.login);

// Ruta protegida con JWT
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ user: req.user, message: 'Ruta protegida con JWT' });
});

export default router;
