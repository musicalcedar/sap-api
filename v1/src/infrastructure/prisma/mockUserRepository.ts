import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/entities/user';
import bcrypt from 'bcrypt';

const users: User[] = [
  {
    id: '1',
    username: 'test',
    password: bcrypt.hashSync('test123', 10),
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockUserRepository: UserRepository = {
  async getUserById(id: string) {
    return users.find(u => u.id === id) || null;
  },
  async getUserByUsername(username: string) {
    return users.find(u => u.username === username) || null;
  },
  async createUser(user: User) {
    users.push(user);
    return user;
  },
  async updateUser(user: User) {
    const idx = users.findIndex(u => u.id === user.id);
    if (idx !== -1) users[idx] = user;
    return user;
  },
  async deleteUser(id: string) {
    const idx = users.findIndex(u => u.id === id);
    if (idx !== -1) users.splice(idx, 1);
  },
  async validatePassword(plain, hashed) {
    return bcrypt.compare(plain, hashed);
  },
};
