import UsuariosService from '../../src/services/usuarios.service';
import User, { IUser } from '../../src/models/user.model';

// Mock de User.findOne
jest.mock('../../src/models/user.model', () => ({
  findOne: jest.fn(),
  create: jest.fn().mockReturnThis(), // Mock del método create
  save: jest.fn(), // Mock del método save
}));

describe('UsuariosService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('login', () => {
    it('should return null if user is not found', async () => {
      
      const mockUser: IUser | null = null;
      (User.findOne as jest.Mock).mockResolvedValue(mockUser);
    
      const result = await UsuariosService.login('username', 'password');

      expect(result).toBeNull();
      expect(User.findOne).toHaveBeenCalledWith({ username: 'username', password: 'password' });
    });

    it('should return user if user is found', async () => {
      
      const mockUser: Partial<IUser> = { _id: 'user_id', username: 'username', password: 'password' };
      (User.findOne as jest.Mock).mockResolvedValue(mockUser as IUser);

      
      const result = await UsuariosService.login('username', 'password');

     
      expect(result).toEqual(mockUser);
      expect(User.findOne).toHaveBeenCalledWith({ username: 'username', password: 'password' });
    });
  });

  describe('register', () => {
    it('should save user and return it', async () => {
      
      const mockUser: Partial<IUser> = { _id: 'user_id', username: 'username', password: 'password' };
      (User.create as jest.Mock).mockReturnValue(mockUser as IUser);
      (User.prototype.save as jest.Mock).mockResolvedValue(mockUser as IUser);

      
      const result = await UsuariosService.register('username', 'password');

      
      expect(result).toEqual(mockUser);
      expect(User.create).toHaveBeenCalledWith({ username: 'username', password: 'password' });
      expect(User.prototype.save).toHaveBeenCalled();
    });
  });
});
