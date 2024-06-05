import axios from 'axios';

class ImagenesService {
  private apiBaseUrl = 'https://api.thecatapi.com/v1';

  async getImagesByBreedId(breed_id: string) {
    const response = await axios.get(`${this.apiBaseUrl}/images/search?breed_id=${breed_id}`, {
      headers: { 'x-api-key': process.env.CAT_API_KEY }
    });
    return response.data;
  }
}

export default new ImagenesService();
