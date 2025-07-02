export interface RefreshToken {
  token: string;
  userId: string;
  expiresAt: Date;
  revoked: boolean;
}

export interface RefreshTokenRepository {
  create({
    token,
    userId,
    expiresAt,
  }: {
    token: string;
    userId: string;
    expiresAt: Date;
  }): Promise<void>;
  findValid(token: string): Promise<RefreshToken | null>;
  revoke(token: string): Promise<void>;
}
