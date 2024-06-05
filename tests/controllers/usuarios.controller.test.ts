import { Request, Response } from 'express';
import UsuariosController from '../../src/controllers/usuarios.controllers';
import UsuariosService from '../../src/services/usuarios.service';

// Mock del servicio de usuarios
jest.mock('../../src/services/usuarios.service', () => ({
  login: jest.fn(),
  register: jest.fn()
}));

describe('UsuariosController', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  const mockJsonFn = jest.fn();
  const mockStatusFn = jest.fn().mockReturnThis(); // Para simular res.status(...)

  beforeEach(() => {
    req = {};
    res = { json: mockJsonFn, status: mockStatusFn } as Partial<Response>;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('login', () => {
    it('should login with valid credentials', async () => {
      const mockUser = { username: 'testUser', password: 'testPassword' };
      (UsuariosService.login as jest.Mock).mockResolvedValue(mockUser);

      req.query = { username: 'testUser', password: 'testPassword' };

      await UsuariosController.login(req as Request, res as Response);

      expect(UsuariosService.login).toHaveBeenCalledWith('testUser', 'testPassword');
      expect(mockJsonFn).toHaveBeenCalledWith(mockUser);
    });

    it('should return 401 with invalid credentials', async () => {
      (UsuariosService.login as jest.Mock).mockResolvedValue(null);

      req.query = { username: 'invalidUser', password: 'invalidPassword' };

      await UsuariosController.login(req as Request, res as Response);

      expect(UsuariosService.login).toHaveBeenCalledWith('invalidUser', 'invalidPassword');
      expect(mockStatusFn).toHaveBeenCalledWith(401);
      expect(mockJsonFn).toHaveBeenCalledWith({ message: 'Invalid credentials' });
    });
  });

  describe('register', () => {
    it('should register a new user', async () => {
      const mockUser = { username: 'newUser', password: 'newPassword' };
      (UsuariosService.register as jest.Mock).mockResolvedValue(mockUser);

      req.body = { username: 'newUser', password: 'newPassword' };

      await UsuariosController.register(req as Request, res as Response);

      expect(UsuariosService.register).toHaveBeenCalledWith('newUser', 'newPassword');
      expect(mockJsonFn).toHaveBeenCalledWith(mockUser);
    });
  });
});
