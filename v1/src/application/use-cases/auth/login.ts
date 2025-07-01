import { UserRepository } from '../../../domain/repositories/UserRepository';
import { TokenService } from '../../../domain/services/TokenService';
import { TokenPair } from '../../../domain/entities/token';
import { User } from '../../../domain/entities/user';

type LoginRequest = {
  username: string;
  password: string;
};

type LoginResponse = {
  user: Omit<User, 'password'>;
  tokens: TokenPair;
};

export const login = async (
  credentials: LoginRequest,
  userRepository: UserRepository,
  tokenService: TokenService
): Promise<LoginResponse> => {
  const user = await userRepository.getUserByUsername(credentials.username);
  if (!user) throw new Error('Invalid credentials');

  const isValid = await userRepository.validatePassword(credentials.password, user.password);
  if (!isValid) throw new Error('Invalid credentials');

  const tokens = await tokenService.generateTokenPair({
    sub: user.id,
    username: user.username,
    role: user.role,
  });

  return {
    user: {
      id: user.id,
      username: user.username,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
    tokens,
  };
};
