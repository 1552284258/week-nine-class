import React, { Component } from "react";
import ReactDOM from "react-dom";

class Button extends Component {
  render() {
    let {onAdd,onMinus}=this.props
    // console.log(this.props);
    return (
      <div>
        <button onClick={onAdd}>增加</button>
        <button onClick={onMinus}>减少</button>
      </div>
    );
  }
}

class Show extends Component {
  render() {
    let { num } = this.props;
    return (
      <div>
        <h2>当前数字是：{num}</h2>
        {/* 不能再子组件直接修改 props 中的数据 */}
        <button onClick={this.props.onBack}>归0</button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state={
        num:100
    }
  }
  add=()=>{
    console.log('点击了增加')
    this.setState({
        num:++this.state.num
    })
  }
  minus=()=>{
    console.log('点击了减少')
    this.setState({
        num:--this.state.num
    })
  }
  back=()=>{
      this.setState({
          num:0
      })
  }
  render() {
    return (
      <div className="qqq">
        <Show num={this.state.num} onBack={this.back}/>
        <Button onAdd={this.add} onMinus={this.minus}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
