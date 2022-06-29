import { combineReducers } from "redux";
import message from "./message";
import authReducer from "./authReducer";
import idReducer from "./idReducer";
import roleReducer from "./roleReducer";
import ordersReducer from "./ordersReducer";

export default combineReducers({
  auth: authReducer,
  message,
  id: idReducer,
  role: roleReducer,
  orders: ordersReducer,
});
