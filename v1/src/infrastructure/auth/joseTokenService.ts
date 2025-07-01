import { SignJWT, jwtVerify } from 'jose';
import { TokenService } from '../../domain/services/TokenService';
import { TokenPayload, TokenPair } from '../../domain/entities/token';
import { config } from '../../config';

const JWT_SECRET = config.JWT_SECRET;
const JWT_EXPIRES_IN = config.JWT_EXPIRES_IN;
const REFRESH_TOKEN_EXPIRES_IN = config.JWT_REFRESH_EXPIRES_IN;

console.log('jwt en jose', JWT_SECRET);

const encoder = new TextEncoder();

function getExpirationSeconds(str: string) {
  if (/^[0-9]+$/.test(str)) return parseInt(str, 10);
  if (str.endsWith('m')) return parseInt(str) * 60;
  if (str.endsWith('h')) return parseInt(str) * 60 * 60;
  if (str.endsWith('d')) return parseInt(str) * 60 * 60 * 24;
  return 900; // default 15m
}

export const joseTokenService: TokenService = {
  async generateTokenPair(payload: TokenPayload): Promise<TokenPair> {
    const now = Math.floor(Date.now() / 1000);

    const accessToken = await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt(now)
      .setExpirationTime(now + getExpirationSeconds(JWT_EXPIRES_IN))
      .sign(encoder.encode(JWT_SECRET));

    const refreshToken = await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt(now)
      .setExpirationTime(now + getExpirationSeconds(REFRESH_TOKEN_EXPIRES_IN))
      .sign(encoder.encode(JWT_SECRET));

    return { accessToken, refreshToken };
  },

  async verifyAccessToken(token: string): Promise<TokenPayload> {
    const { payload } = await jwtVerify(token, encoder.encode(JWT_SECRET));
    return payload as TokenPayload;
  },

  async verifyRefreshToken(token: string): Promise<TokenPayload> {
    const { payload } = await jwtVerify(token, encoder.encode(JWT_SECRET));
    return payload as TokenPayload;
  },
};
