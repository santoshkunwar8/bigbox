import { Dispatch } from "react";
import { Usertype } from "../../utils/Types";
import { Action } from "./index";
import { ActionTypes } from "./ActionTypes";

export const AddUserAction=(payload:Usertype)=>(dispatch:Dispatch<Action>)=>{

    return dispatch({
        type:ActionTypes.ADD_USER,
        payload
    })

}

export const  RemoveUserAction=()=>(dispatch:Dispatch<Action>)=>{

    return dispatch({
        type:ActionTypes.REMOVE_USER,
        
    })

}

export  const RefreshAction=()=>(dispatch:Dispatch<Action>)=>{
 return dispatch({
        type:ActionTypes.REFRESH
    })
}