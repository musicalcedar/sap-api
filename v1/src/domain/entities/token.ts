export type TokenPayload = {
  sub: string;          // user id
  username: string;     // username
  role: string;         // user role
  iat?: number;         // issued at
  exp?: number;         // expiration time
};

export type TokenPair = {
  accessToken: string;
  refreshToken: string;
};
