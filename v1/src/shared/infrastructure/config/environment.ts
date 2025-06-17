import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().transform(Number).default('3000'),
  
  // Database
  DATABASE_URL: z.string(),
  
  // SAP Service Layer
  SAP_URL: z.string(),
  SAP_COMPANY_DB: z.string(),
  SAP_USERNAME: z.string(),
  SAP_PASSWORD: z.string(),
  
  // JWT
  JWT_SECRET: z.string(),
  JWT_REFRESH_SECRET: z.string(),
  JWT_EXPIRES_IN: z.string().default('1h'),
  JWT_REFRESH_EXPIRES_IN: z.string().default('7d'),
  
  // Redis
  REDIS_URL: z.string().default('redis://localhost:6379'),
  REDIS_PASSWORD: z.string().optional(),
  REDIS_PREFIX: z.string().default('sap_api:'),
});

const env = envSchema.parse(process.env);

export default env;
