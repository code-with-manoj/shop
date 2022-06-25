import Quantity from "./Quantity";
import Cart from "./Cart";
import { combineReducers } from "redux";

const root = combineReducers({ Quantity, Cart });

export default root;
