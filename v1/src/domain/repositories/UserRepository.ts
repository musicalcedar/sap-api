import { User } from '../entities/user';

export interface UserRepository {
  getUserById(id: string): Promise<User | null>;
  getUserByUsername(username: string): Promise<User | null>;
  createUser(user: User): Promise<User>;
  updateUser(user: User): Promise<User>;
  deleteUser(id: string): Promise<void>;
  validatePassword(plainPassword: string, hashedPassword: string): Promise<boolean>;
}
