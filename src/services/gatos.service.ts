import axios from 'axios';

class GatosService {
  private apiBaseUrl = 'https://api.thecatapi.com/v1';

  async getBreeds() {
    const response = await axios.get(`${this.apiBaseUrl}/breeds`, {
      headers: { 'x-api-key': process.env.CAT_API_KEY }
    });
    return response.data;
  }

  async getBreedById(breed_id: string) {
    const response = await axios.get(`${this.apiBaseUrl}/breeds/${breed_id}`, {
      headers: { 'x-api-key': process.env.CAT_API_KEY }
    });
    return response.data;
  }

  async searchBreeds(query: string) {
    const response = await axios.get(`${this.apiBaseUrl}/breeds/search?q=${query}`, {
      headers: { 'x-api-key': process.env.CAT_API_KEY }
    });
    return response.data;
  }
}

export default new GatosService();
