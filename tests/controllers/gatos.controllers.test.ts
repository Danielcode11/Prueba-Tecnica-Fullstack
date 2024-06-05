import { Request, Response } from 'express';
import GatosController from '../../src/controllers/gatos.controllers';
import GatosServiceMock from '../mocks/gatos.service.mock';

jest.mock('../../src/services/gatos.service', () => GatosServiceMock);

describe('GatosController', () => {
  let req: jest.Mocked<Request>;
  let res: jest.Mocked<Response>;

  beforeEach(() => {
    req = {} as jest.Mocked<Request>;
    res = {} as jest.Mocked<Response>;
    res.status = jest.fn() as jest.MockedFunction<typeof res.status>;
    res.json = jest.fn() as jest.MockedFunction<typeof res.json>;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getBreeds', () => {
    it('should return a list of breeds', async () => {
      const mockBreeds = [{ name: 'Breed1' }, { name: 'Breed2' }];
      GatosServiceMock.getBreeds.mockResolvedValue(mockBreeds);

      await GatosController.getBreeds(req, res);

      expect(GatosServiceMock.getBreeds).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith(mockBreeds);
    });
  });

  describe('getBreedById', () => {
    it('should return a breed by ID', async () => {
      const mockBreed = { name: 'Breed1' };
      req.params = { breed_id: '1' };
      GatosServiceMock.getBreedById.mockResolvedValue(mockBreed);

      await GatosController.getBreedById(req, res);

      expect(GatosServiceMock.getBreedById).toHaveBeenCalledWith('1');
      expect(res.json).toHaveBeenCalledWith(mockBreed);
    });
  });

  describe('searchBreeds', () => {
    it('should return search results', async () => {
      const mockResults = [{ name: 'Breed1' }, { name: 'Breed2' }];
      req.query = { q: 'Breed' };
      GatosServiceMock.searchBreeds.mockResolvedValue(mockResults);

      await GatosController.searchBreeds(req, res);

      expect(GatosServiceMock.searchBreeds).toHaveBeenCalledWith('Breed');
      expect(res.json).toHaveBeenCalledWith(mockResults);
    });
  });
});
