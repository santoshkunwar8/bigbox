import { Usertype } from "../../utils/Types";
import { ActionTypes } from "./ActionTypes";

interface AddUserAction{
    type:ActionTypes.ADD_USER,
    payload:Usertype
}
interface RemoveUserAction{
    type:ActionTypes.REMOVE_USER,
}
interface RefreshAction{
    type:ActionTypes.REFRESH
}

export type Action = AddUserAction | RemoveUserAction | RefreshAction

