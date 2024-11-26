import mongoose, { RootFilterQuery } from "mongoose"
import { _updateProfile, _userPagination, _userPaginator, user } from "../types/user"
import { IUserDocument } from "../interfaces/user.interface"
import { QueryHelper } from "../Helpper/query.helper"

export const UserService = {
    get: function (pagination: _userPagination, user_id: string): Promise<_userPaginator> {
        let filter: RootFilterQuery<IUserDocument> = {
            _id: { $nin: new mongoose.Types.ObjectId(user_id) },
            $and: QueryHelper.parseUserQuery(pagination)
        }
        // to be continue //
        throw new Error('not implement')
    },
    getByusername: function (username: string): Promise<user> {
        throw new Error('not implement')
    },
    updateProfile: function (newPeofile: _updateProfile, user_id: string): Promise<user> {
        throw new Error('not implement')
    },
}
