import express from 'express';
import cors from 'cors';
import mainRoutes from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', mainRoutes);

export default app;
