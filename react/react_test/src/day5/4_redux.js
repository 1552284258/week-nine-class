import React from 'react';
import ReactDOM from 'react-dom'
import {Provider,connect} from 'react-redux';
import store from '../store/index'
import {add,minus,changeColor} from '../store/actions'

class Show extends React.Component{
  render(){
    return <div>
      <h1 style={{color:this.props.color}}>当前数字是：{this.props.count}</h1>
    </div>
  }
}
Show = connect((state)=>{
  // return state
  return {
    count:state.countReducer.count,
    color:state.colorReducer.color
  }
},(dispatch)=>{
  return{}
})(Show)

class Button extends React.Component{
  render(){
    return <div>
      <button onClick={()=>this.props.dispatch(add(10))}>+</button>
      <button onClick={()=>this.props.dispatch(minus(5))}>-</button>
      <button onClick={_=>this.props.dispatch(changeColor('blue'))}>变色</button>
      {/* <button onClick={_=>this.props.dispatch({type:types.CHANGECOLOR,color:"blue"})}>变色</button> */}
    </div>
  }
}
Button = connect((state)=>{
  return {}
},(dispatch)=>{
  return {
    dispatch,
    change(action){
      dispatch(action)
    }
  }
})(Button)

class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
          <Show></Show>
          <Button></Button>
        </div>;
    }
}
ReactDOM.render(<Provider store={store}>
  {/* Provider 是一个容器； 该容器 把store放到了 react的组件中*/}
  <App/>
</Provider>,document.getElementById('root'))
