import fastify, { FastifyServerOptions } from "fastify";

export default function createServer(opts?: FastifyServerOptions) {
  const app = fastify(opts);

  app.get("/", async () => {
    return { hello: "world" };
  });

  app.get<{ Querystring: { handle: string } }>(
    "/twitter",
    async (request, _reply) => {
      return { twitterHandle: request.query.handle };
    }
  );

  return fastify;
}
