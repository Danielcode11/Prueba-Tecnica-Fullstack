import { Request, Response } from 'express';
import UsuariosService from '../services/usuarios.service';

class UsuariosController {
  async login(req: Request, res: Response) {
    const user = await UsuariosService.login(req.query.username as string, req.query.password as string);
    if (user) {
      res.json(user);
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  }

  async register(req: Request, res: Response) {
    const user = await UsuariosService.register(req.body.username, req.body.password);
    res.json(user);
  }
}

export default new UsuariosController();
