import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { prismaUserRepository } from '../../prisma/prismaUserRepository';
import { config } from '../../../config';

const jwtSecret = config.JWT_SECRET;
console.log('jwtSecret en jwtStrategy', jwtSecret);

export const jwtStrategy = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret,
  },
  async (payload, done) => {
    try {
      const user = await prismaUserRepository.getUserById(payload.sub);
      if (!user) return done(null, false);
      return done(null, user);
    } catch (err) {
      return done(err, false);
    }
  }
);
