import * as types from "./action-types";

export const add = num => {
  return {
    type: types.ADD,
    qqq: num
  };
};
export function minus(num) {
  //   return {
  //     type: types.MINUS,
  //     qqq: num
  //   };

  //异步  得写中间件
  return function(dispatch, getState) {
    setTimeout(() => {
      dispatch({
        type: types.MINUS,
        qqq: num
      });
      console.log(getState())
    }, 2000);
  };
}
export function changeColor(color) {
  return {
    type: types.CHANGECOLOR,
    color: color
  };
}
