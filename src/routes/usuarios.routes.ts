import { Router } from 'express';
import UsuariosController from '../controllers/usuarios.controllers';

const router = Router();

router.get('/login', UsuariosController.login);
router.post('/register', UsuariosController.register);

export default router;
