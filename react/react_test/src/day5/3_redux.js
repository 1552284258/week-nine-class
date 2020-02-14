import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux"; //redux是用来产生数据源 及 更改数据的方法
import { Provider, connect } from "react-redux"; //react-redux是把redux和react联系到一起

//在react中，reducer就是纯函数的简称
function countReducer(state = { count: 0 }, action) {
  //该函数接受两个参数，一个state，一个action；state是存放数据的 action是用来更改数据的依赖
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count: state.count + action.qqq
      };
    case "MINUS":
      return {
        ...state,
        count: state.count - action.qqq
      };
    default:
      return state;
  }
}
function colorReducer(state = { color: "red" }, action) {
  switch (action.type) {
    case "CHANGECOLOR":
      return {
        ...state,
        color: action.color
      };
    default:
      return state;
  }
}
//combineReducers 把多个reducer合并成一个
let store = createStore(
  combineReducers({
    qqq: countReducer,
    www: colorReducer
  })
);

class Show extends React.Component {
  render() {
    return (
      <>
        <h1 style={{ color: this.props.color }}>
          当前数字是：{this.props.count}
        </h1>
      </>
    );
  }
}
//connect 有两层参数，第一次是两个回调函数，第二次是组件
//第一个回调函数返回的对象包含的数据；第二个回调函数返回的对象包含的方法
Show = connect(state => {
    return {
      count: state.qqq.count,
      color: state.www.color
    };
  },dispatch => {
    return {};
  }
)(Show);

class Button extends React.Component {
  render() {
      console.log(this.props.dispatch)
      let num = Math.random()
      console.log(num)
    return (
      <>
        <button onClick={_=>this.props.dispatch({type:"ADD",qqq:10})}>+</button>
        <button onClick={_=>this.props.dispatch({type:"ADD",qqq:-5})}>-</button>
        <button onClick={_=>this.props.dispatch({type:"CHANGECOLOR",color:"blue"})}>变色</button>
      </>
    );
  }
}
Button = connect(state=>{
    return{}
},dispatch=>{
    return{
        dispatch
    }
})(Button)

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="">
        <Show></Show>
        <Button></Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    {/* Provider 是一个容器，该容器把store放到了react的组件中 */}
    <App />
  </Provider>,
  document.getElementById("root")
);
