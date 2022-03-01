import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import indexReducers from "./reducers/indexReducer";

const store = createStore(indexReducers, applyMiddleware(thunk));

export default store;
