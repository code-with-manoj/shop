import root from "../Reducers/rootReducer";
import { createStore } from "redux";

const Store = createStore(
  root,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;
