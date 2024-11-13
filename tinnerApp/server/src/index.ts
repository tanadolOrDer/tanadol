import { Elysia, t } from "elysia"
import { example } from "./controllers/example.controllers"
import { swaggerConfig } from "./config/swagger.config"
import { tlsConfig } from "./config/tls.config"
import cors from "@elysiajs/cors"


const app = new Elysia()

  .use(swaggerConfig)
  .use(example)
  .use(cors())
  .listen({
    port: Bun.env.PORT || 8000,

  })

console.log(app.server?.hostname);


