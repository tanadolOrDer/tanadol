import Elysia, { Static, t } from "elysia"
import { _register } from "./register.types"
import { _paginator, createPagination as CreatePagination } from "./pagination.type"


export const _profile = t.Object({
    ...t.Omit(_register, ['password']).properties,
    id: t.String(),
    introduction: t.Optional(t.String()),
    interest: t.Optional(t.String()),
    age: t.Optional(t.String()),
    last_active: t.Optional(t.Date()),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(t.Date()),
    location: t.Optional(t.String())
    //todo: implement uplond feature


})
export const _user = t.Object({
    ..._profile.properties,
    //todo: implement like feature
    //followers: profile[]
    //followers: profile[]
})
const _userPagination = t.Object({
    ..._paginator.properties,
    username: t.Optional(t.String()),
    mix_age: t.Optional(t.Number()),
    max_age: t.Optional(t.Number()),
    looking_for: t.Optional(t.Union([t.Literal('male'), t.Literal('famal'), t.Literal('all')])),
    gender: t.Optional(t.Number()),
})
export const _updateProfile = t.Omit(_profile, ['id', 'username', 'created_at', 'last_active'])
export const _userPaginator = CreatePagination(_user, _userPagination)
export const UserDto = new Elysia().model({
    pagination: t.Optional(_userPagination),
    _updateProfile: _updateProfile,
    users: _userPaginator,
    user: _user
})
export type _updateProfile = Static<typeof _updateProfile>
export type _userPagination = Static<typeof _userPagination>
export type _userPaginator = Static<typeof _userPaginator>
export type user = Static<typeof _user>
