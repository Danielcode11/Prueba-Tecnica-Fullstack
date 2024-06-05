import { Router } from 'express';
import ImagenesController from '../controllers/imagenes.controller';

const router = Router();

router.get('/imagesbybreedid', ImagenesController.getImagesByBreedId);

export default router;
