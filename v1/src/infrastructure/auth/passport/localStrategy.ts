import { Strategy as LocalStrategy } from 'passport-local';
import { prismaUserRepository } from '../../prisma/prismaUserRepository';

export const localStrategy = new LocalStrategy(async (username, password, done) => {
  try {
    const user = await prismaUserRepository.getUserByUsername(username);
    if (!user) return done(null, false, { message: 'Usuario no encontrado' });
    const isValid = await prismaUserRepository.validatePassword(password, user.password);
    if (!isValid) return done(null, false, { message: 'Contraseña incorrecta' });
    return done(null, user);
  } catch (err) {
    return done(err);
  }
});
