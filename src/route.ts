import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

export async function routes(fastify: FastifyInstance, option: FastifyPluginOptions){

    fastify.get("/test",(request: FastifyRequest, reply: FastifyReply) => {
        console.log("ROTA CHAMADA")
        reply.send({ok: true})
    } )

}