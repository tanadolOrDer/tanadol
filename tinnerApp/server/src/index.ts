import { Elysia, t } from "elysia"
import { example } from "./controllers/example.controllers"
import { swaggerConfig } from "./config/swagger.config"


const app = new Elysia()

  .use(swaggerConfig)
  .use(example)
  .use(cors())
  .listen(8000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
function cors(): any {
  throw new Error("Function not implemented.")
}

