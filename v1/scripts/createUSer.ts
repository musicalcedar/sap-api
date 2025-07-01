import { prisma } from '../src/infrastructure/prisma/prismaClient';
import bcrypt from 'bcrypt';

async function main() {
  const password = await bcrypt.hash('test123', 10);
  await prisma.user.create({
    data: {
      username: 'test',
      password,
      role: 'admin',
    },
  });
  console.log('Usuario creado');
}

main().finally(() => prisma.$disconnect());
