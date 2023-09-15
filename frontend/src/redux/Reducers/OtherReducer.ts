import { Action } from "../Action";
import { ActionTypes } from "../Action/ActionTypes";

const initialState = {
    refresh:false,
}

export const otherReducer=(state=initialState,action:Action)=>{
    switch (action.type) {
        case ActionTypes.REFRESH:
            return {...state, refresh: !state.refresh}
        
    
        default:
            return state;
    }
}