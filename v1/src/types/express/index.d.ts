import type { User as DomainUser } from '../../domain/entities/user';

declare global {
  namespace Express {
    // Incluye todos los campos de User, sin omitir password
    interface User extends DomainUser {}
    interface Request {
      user?: User;
    }
  }
}
