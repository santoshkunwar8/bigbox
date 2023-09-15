import { Action } from "../Action";
import { ActionTypes } from "../Action/ActionTypes";


const initialState={
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