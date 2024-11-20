import Elysia, { t } from "elysia"


export const example = new Elysia()
    .get("/", () => "Hello Elysia", {
        detail: {
            tags: ["Example"],
            summary: "get/Hello",
            description: "Wowwww"
        }
    })
    .post("/about", ({ body }) => {
        return {
            id: 'xxx',
            msg: 'hello' + body.name
        }
    }, {
        body: t.Object({
            name: t.String()
        }), detail: {
            tags: ["Example"],
            summary: "abput",
            description: "tanandol"
        }
    })