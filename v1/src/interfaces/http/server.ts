import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import mainRoutes from './routes';
import { initializePassport } from '../../infrastructure/auth/passport';
import { boomErrorHandler, errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

initializePassport();
app.use(passport.initialize());

app.use('/api/v1', mainRoutes);

app.use(boomErrorHandler);
app.use(errorHandler);

export default app;
