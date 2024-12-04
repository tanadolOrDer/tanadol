import Elysia from "elysia"

export const PhotoController = new Elysia({
    prefix: "api/photo",
    tags: ['Photo']
})
    .post('/', async ({ body: { imgFile } }) => {
        const filename = ${ Date.now()
    }-${ imgfile.name }
        const filePath = 'pubilc'
    } )