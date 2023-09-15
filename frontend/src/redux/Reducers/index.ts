 import {combineReducers} from "redux"
import { userReducer } from "./UserReducer"
import { otherReducer } from "./OtherReducer"
 const reducers =combineReducers({
    user:userReducer,
    other:otherReducer,
 })
 export default reducers;
 export type State = ReturnType<typeof reducers>
 