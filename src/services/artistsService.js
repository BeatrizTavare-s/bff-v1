import { Client } from 'undici'
export default class ArtistService {
  #client
  constructor() {
    this.#client = new Client('http://localhost:3001')
  }


  async getArtists() {
    const response = await this.#client.request({
      method: 'GET',
      path: '/artists'
    });
    const data = await response.body.json();

    return data
  }
}