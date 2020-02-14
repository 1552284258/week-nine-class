import * as types from "./action-types";

export function countReducers(state = { count: 100 }, action) {
  switch (action.type) {
    case types.add:
      return {
        ...state,
        count: state.count + action.num
      };
    case types.minus:
      return {
        ...state,
        count: state.count - action.num
      };
    default:
        return{
            ...state
        }
      break;
  }
}
