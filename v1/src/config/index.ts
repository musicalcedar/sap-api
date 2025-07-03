function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

export const config = {
  DATABASE_URL: requireEnv('DATABASE_URL'),
  SAP_URL: requireEnv('SAP_URL'),
  SAP_COMPANY_DB: requireEnv('SAP_COMPANY_DB'),
  SAP_USERNAME: requireEnv('SAP_USERNAME'),
  SAP_PASSWORD: requireEnv('SAP_PASSWORD'),

  JWT_SECRET: requireEnv('JWT_SECRET'),
  JWT_REFRESH_SECRET: requireEnv('JWT_REFRESH_SECRET'),
  JWT_EXPIRES_IN: requireEnv('JWT_EXPIRES_IN'),
  JWT_REFRESH_EXPIRES_IN: requireEnv('JWT_REFRESH_EXPIRES_IN'),

  REDIS_URL: requireEnv('REDIS_URL'),
};
