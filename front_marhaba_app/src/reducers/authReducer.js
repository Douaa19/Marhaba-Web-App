import { LOGIN, LOGOUT } from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: user,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
};

export default authReducer;
