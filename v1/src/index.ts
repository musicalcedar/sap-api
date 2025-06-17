import { createApp } from './shared/infrastructure/server/app';
import env from './shared/infrastructure/config/environment';

const startServer = async (): Promise<void> => {
  try {
    const app = createApp();

    app.listen(env.PORT, () => {
      console.warn(`🚀 Server running on port ${env.PORT} in ${env.NODE_ENV} mode`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer().catch(console.error);
