import { Request, Response } from 'express';
import ImagenesController from '../../src/controllers/imagenes.controller';
import ImagenesService from '../../src/services/imagenes.service';

// Mock del servicio de imágenes
jest.mock('../../src/services/imagenes.service', () => ({
  getImagesByBreedId: jest.fn()
}));

describe('ImagenesController', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  const mockJsonFn = jest.fn();

  beforeEach(() => {
    req = { query: { breed_id: '1' } };
    res = { json: mockJsonFn } as Partial<Response>;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getImagesByBreedId', () => {
    it('should return images for a given breed ID', async () => {
      const mockImages = [{ url: 'image1.jpg' }, { url: 'image2.jpg' }];
      (ImagenesService.getImagesByBreedId as jest.Mock).mockResolvedValue(mockImages);

      await ImagenesController.getImagesByBreedId(req as Request, res as Response);

      expect(ImagenesService.getImagesByBreedId).toHaveBeenCalledWith('1');
      expect(mockJsonFn).toHaveBeenCalledWith(mockImages);
    });
  });
});
