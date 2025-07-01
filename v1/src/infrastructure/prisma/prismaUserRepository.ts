import { prisma } from './prismaClient';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/entities/user';
import bcrypt from 'bcrypt';

export const prismaUserRepository: UserRepository = {
  async getUserById(id: string) {
    const user = await prisma.user.findUnique({ where: { id } });
    return user as unknown as User | null;
  },
  async getUserByUsername(username: string) {
    const user = await prisma.user.findUnique({ where: { username } });
    return user as unknown as User | null;
  },
  async createUser(user: User) {
    const created = await prisma.user.create({ data: user });
    return created as unknown as User;
  },
  async updateUser(user: User) {
    const updated = await prisma.user.update({
      where: { id: user.id },
      data: user,
    });
    return updated as unknown as User;
  },
  async deleteUser(id: string) {
    await prisma.user.delete({ where: { id } });
  },
  async validatePassword(plain, hashed) {
    return bcrypt.compare(plain, hashed);
  },
};
