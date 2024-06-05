import { Request, Response } from 'express';
import ImagenesService from '../services/imagenes.service';

class ImagenesController {
  async getImagesByBreedId(req: Request, res: Response) {
    const images = await ImagenesService.getImagesByBreedId(req.query.breed_id as string);
    res.json(images);
  }
}

export default new ImagenesController();
