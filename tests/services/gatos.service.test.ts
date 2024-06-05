import axios from 'axios';
import GatosService from '../../src/services/gatos.service';

//Utilizo jest.mock para simular el axios y poder probar las peticiones.
jest.mock('axios');

describe('GatosService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getBreeds', () => {
    it('should return a list of breeds', async () => {
      const mockData = [{ id: '1', name: 'Breed1' }, { id: '2', name: 'Breed2' }];
      // aca se utiliza el mockResolvedValueOnce para simular una respuesta exitosa de la API
      (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: mockData });

      const breeds = await GatosService.getBreeds();

      expect(axios.get).toHaveBeenCalledWith('https://api.thecatapi.com/v1/breeds', {
        headers: { 'x-api-key': process.env.CAT_API_KEY }
      });
      expect(breeds).toEqual(mockData);
    });
  });

  describe('getBreedById', () => {
    it('should return a breed by ID', async () => {
      const mockData = { id: '1', name: 'Breed1' };
      const breedId = '1';
      (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: mockData });

      const breed = await GatosService.getBreedById(breedId);
        // Se utiliza el toHaveBeenCalledWith para asegurar que la función se este llamando con los argumentos correctos.
        expect(axios.get).toHaveBeenCalledWith(`https://api.thecatapi.com/v1/breeds/${breedId}`, {
        headers: { 'x-api-key': process.env.CAT_API_KEY }
      });
      expect(breed).toEqual(mockData);
    });
  });

  describe('searchBreeds', () => {
    it('should return search results', async () => {
      const query = 'Breed';
      const mockData = [{ id: '1', name: 'Breed1' }, { id: '2', name: 'Breed2' }];
      (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: mockData });

      const results = await GatosService.searchBreeds(query);

      expect(axios.get).toHaveBeenCalledWith(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, {
        headers: { 'x-api-key': process.env.CAT_API_KEY }
      });
      expect(results).toEqual(mockData);
    });
  });
});
