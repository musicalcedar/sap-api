import { Router } from 'express';
import passport from 'passport';
import { authController } from '../controllers/authController';

const router = Router();

router.post('/login', passport.authenticate('local', { session: false }), authController.login);

export default router;
