import { Static, t, TSchema } from "elysia"

export const _paginator = t.Object({
    pageSize: t.Number(),
    currentPage: t.Number(),
    length: t.Optional(t.Number()),
})
export type _paginator = Static<typeof _paginator>
export function createPagination<T extends TSchema, U extends TSchema>(itemtype: T, paginationType: U) {
    return t.Object({
        items: t.Array(itemtype),
        pagination: paginationType
    })
}