import { Request, Response } from 'express';
import GatosService from '../services/gatos.service';

class GatosController {
  async getBreeds(req: Request, res: Response) {
    const breeds = await GatosService.getBreeds();
    res.json(breeds);
  }

  async getBreedById(req: Request, res: Response) {
    const breed = await GatosService.getBreedById(req.params.breed_id);
    res.json(breed);
  }

  async searchBreeds(req: Request, res: Response) {
    const results = await GatosService.searchBreeds(req.query.q as string);
    res.json(results);
  }
}

export default new GatosController();
