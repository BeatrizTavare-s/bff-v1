import Fastify from "fastify";
import { ArtistsController } from "./controllers/artistsController.js";

const fastify = Fastify({
  logger: true
});
const artistsController = new ArtistsController();

fastify.get('/artists', async (request, reply) => {
  const artists = await artistsController.getArtists();
  reply.send(artists)
})

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})