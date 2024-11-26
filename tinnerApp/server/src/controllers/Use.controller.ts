import Elysia from "elysia"

export const UserController = new Elysia({
    prefix: "/api/user",
    tags: ['User']
})
    .get('/all', () => {
        return {
            text: "hello wond"
        }
    }, {
        isSignIn: true
    })