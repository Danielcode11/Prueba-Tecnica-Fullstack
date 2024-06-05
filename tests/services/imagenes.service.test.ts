import axios from 'axios';
import ImagenesService from '../../src/services/imagenes.service';

// Mock de axios
jest.mock('axios');

describe('ImagenesService', () => {
  describe('getImagesByBreedId', () => {
    it('should return images for a given breed ID', async () => {
      const mockResponse = [{ url: 'image1.jpg' }, { url: 'image2.jpg' }];
      const mockBreedId = '12345';

      // Mock del método get de axios
      (axios.get as jest.Mock).mockResolvedValue({ data: mockResponse });

      const images = await ImagenesService.getImagesByBreedId(mockBreedId);

      // Verifica que axios.get haya sido llamado con la URL correcta
      expect(axios.get).toHaveBeenCalledWith(`https://api.thecatapi.com/v1/images/search?breed_id=${mockBreedId}`, {
        headers: { 'x-api-key': process.env.CAT_API_KEY }
      });

      // Verifica que el servicio devuelva los datos esperados
      expect(images).toEqual(mockResponse);
    });
  });
});
