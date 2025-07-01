import { User } from '../../domain/entities/user';

declare global {
  namespace Express {
    interface User extends Omit<User, 'password'> {}
    interface Request {
      user?: User;
    }
  }
}
