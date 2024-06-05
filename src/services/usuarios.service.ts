import User, { IUser } from '../models/user.model';

class UsuariosService {
  async login(username: string, password: string): Promise<IUser | null> {
    const user = await User.findOne({ username, password });
    return user;
  }

  async register(username: string, password: string): Promise<IUser> {
    const user = new User({ username, password });
    await user.save();
    return user;
  }
}

export default new UsuariosService();
