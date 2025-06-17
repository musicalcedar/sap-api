import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';

export const createApp = (): Express => {
  const app = express();

  app.use(helmet());
  app.use(cors());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get('/health', (_req: Request, res: Response) => {
    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
    });
  });

  return app;
};
