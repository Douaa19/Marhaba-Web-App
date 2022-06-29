import { SETID } from "../actions/types";

const idReducer = (state = "", action) => {
  switch (action.type) {
    case SETID:
      return action.payload;

    default:
      return state;
  }
};

export default idReducer;
