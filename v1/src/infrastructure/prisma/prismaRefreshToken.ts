import { prisma } from './prismaClient';

export const prismaRefreshTokenRepository = {
  async create({ token, userId, expiresAt }: { token: string; userId: string; expiresAt: Date }) {
    return prisma.refreshToken.create({
      data: { token, userId, expiresAt },
    });
  },
  async findValid(token: string) {
    return prisma.refreshToken.findFirst({
      where: { token, revoked: false, expiresAt: { gt: new Date() } },
    });
  },
  async revoke(token: string) {
    return prisma.refreshToken.updateMany({
      where: { token },
      data: { revoked: true },
    });
  },
};
