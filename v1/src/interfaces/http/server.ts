import express from 'express';
import cors from 'cors';
import mainRoutes from './routes';
import { initializePassport } from '@/infrastructure/auth/passport';
import passport from 'passport';

const app = express();

app.use(cors());
app.use(express.json());

initializePassport();
app.use(passport.initialize());

app.use('/api/v1', mainRoutes);

export default app;
