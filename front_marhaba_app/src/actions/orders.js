import { SETORDERS, SETINITIALE } from "./types";

export const setOrders = (orders) => {
  return {
    type: SETORDERS,
    payload: orders,
  };
};

export const setInitial = () => {
  return {
    type: SETINITIALE,
  };
};
