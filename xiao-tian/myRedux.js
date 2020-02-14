function createStore(reducer) {
  if (typeof reducer !== "function") {
    // 如果reducer不是个函数，就抛出一条错误，下面直接不执行了
    throw new TypeError("reducer must be a function!");
  }

  let state, //容器状态
    listeners = []; // 事件池

  // 获取容器中的状态
  const getState = function getState() {
    return JSON.parse(JSON.stringify(state)); //防止返回的状态和原始状态公用一个相同的空间，这样会导致获取状态后直接就能修改容器中的状态信息
  };

  // 给容器事件池中追加方法
  const subscribe = function subscribe(func) {
    if (typeof func !== "function") return;
    //如果事件池中没有这个，才添加
    if (!listeners.includes(func)) {
      listeners.push(func);
    }
    return function unsubscribe() {
      //执行返回函数，就移除这个事件
      listeners = listeners.filter(item => item !== func);
    };
  };

  //  派发行为任务
  const dispatch = function dispatch(action) {
    if (action === null || action === undefined) return; //action 必须不等于null或undefined
    if (typeof action !== "object") return; //action 必须是个对象
    if (!action.hasOwnProperty(type)) return; //action 必须有type属性
    //=> 通知 reducer 执行；把返回值替换原始的状态信息
    state = reducer(state, action);
    //=> 如果状态改变，通知事件池中的方法依次执行
    listeners.forEach(item => {
      item();
    });
  };

  //=>初始的时候我们自己先派发一次，目的是给状态赋值初始值
//   const randomString = function randomString() {
//     return Math.random()
//       .toString(36)
//       .substring(7)
//       .split("")
//       .join(".");
//   };
//   dispatch({
//     type: randomString()
//   });
  dispatch({
    type: Math.random()
  });

  return {
    getState,
    subscribe,
    dispatch
  };
}

export { createStore };
