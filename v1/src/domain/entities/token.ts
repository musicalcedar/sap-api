export type TokenPayload = {
  sub: string;
  username: string;
  role: string;
  iat?: number;
  exp?: number;
};

export type TokenPair = {
  accessToken: string;
  refreshToken: string;
};
