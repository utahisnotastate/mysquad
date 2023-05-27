import * as React  from "react";
import { createStore } from 'redux';
import rootReducer from "./reducers";

//create a store with the rootReducer
const store = createStore(rootReducer);
export default store;