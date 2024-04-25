import ArtistsService from '../services/artistsService.js'
const artistsService = new ArtistsService();

export class ArtistsController {

  async getArtists() {
    const artists = await artistsService.getArtists();
    return { artists }
  }

  /** @param {number} id*/
  async getArtist(id) {
    fastify.get('/artists', (request, reply) => {
      reply.send({ hello: 'worl' })
    })
  }
} 
