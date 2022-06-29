import { SETORDERS, SETINITIALE } from "../actions/types";

const ordersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case SETORDERS:
      return {
        ...state,
        orders: state.orders.concat(action.payload),
      };
    case SETINITIALE:
      return {
        ...state,
        orders: [],
      };
    default:
      return state;
  }
};

export default ordersReducer;
