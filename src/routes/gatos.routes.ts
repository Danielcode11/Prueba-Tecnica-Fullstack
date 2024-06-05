import { Router } from 'express';
import GatosController from '../controllers/gatos.controllers';

const router = Router();

router.get('/breeds', GatosController.getBreeds);
router.get('/breeds/:breed_id', GatosController.getBreedById);
router.get('/breeds/search', GatosController.searchBreeds);

export default router;
