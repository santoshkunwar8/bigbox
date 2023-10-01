import { Usertype } from "../../utils/Types";
import { Action } from "../Action";
import { ActionTypes } from "../Action/ActionTypes";

type initialStateType={
    user:null | Usertype

}
const initialState:initialStateType={
    user:null
}

export const userReducer=(state=initialState,action:Action)=>{
    switch (action.type) {
        case ActionTypes.ADD_USER:
            return {user:action.payload}
            
        case ActionTypes.REMOVE_USER:
            return {user:null}
        
        
    
        default:
            return state
    }
}