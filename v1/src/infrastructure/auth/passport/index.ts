import passport from 'passport';
import { localStrategy } from './localStrategy';
import { jwtStrategy } from './jwtStrategy';

export function initializePassport() {
  passport.use('local', localStrategy);
  passport.use('jwt', jwtStrategy);
}
