import { combineReducers } from "redux";
import reposReducer from "./repositories.reducers";


const reducers = combineReducers({
    repos: reposReducer,
})

export default reducers;

export type rootState = ReturnType<typeof reducers>; 