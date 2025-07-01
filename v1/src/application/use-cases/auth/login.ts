import { TokenService } from '../../../domain/services/TokenService';
import { TokenPair } from '../../../domain/entities/token';
import { User } from '../../../domain/entities/user';

type LoginResponse = {
  user: Omit<User, 'password'>;
  tokens: TokenPair;
};

export const login = async (user: User, tokenService: TokenService): Promise<LoginResponse> => {
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
