import thunk from "redux-thunk"
import reducers from "./Reducers"
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux"


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export { store }