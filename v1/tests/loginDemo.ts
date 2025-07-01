import { login } from '../src/application/use-cases/auth/login';
import { mockUserRepository } from '../src/infrastructure/auth/mockUserRepository';
import { joseTokenService } from '../src/infrastructure/auth/joseTokenService';

async function main() {
  try {
    const result = await login(
      { username: 'test', password: 'test123' }, // Usuario y contraseña del mock
      mockUserRepository,
      joseTokenService
    );
    console.log('Login exitoso:', result);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error en login:', error.message);
    } else {
      console.error('Error en login:', error);
    }
  }
}
main();
