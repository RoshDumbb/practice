import { Fakestore_Reducer } from "./Reducer";
import thunk from "redux-thunk"
import {createStore,applyMiddleware} from "redux"
// const loggerMiddleware = (store) => (next) => (action) => {
//     next(action);
// }
export const Store = createStore(
    Fakestore_Reducer,
    applyMiddleware(thunk)
)