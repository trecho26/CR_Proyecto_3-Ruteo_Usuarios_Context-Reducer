import { DECREMENTAR, INCREMENTAR } from "./types";

export const appReducer = (state, action) => {
  switch (action.type) {
    case INCREMENTAR:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENTAR:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return { ...state };
  }
};
