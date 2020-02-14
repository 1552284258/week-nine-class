import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }
  add(n, e) {
    this.setState({
      num: this.state.num + n
    });
  }

  add2 = () => {
    let n = this.state.num
    //setState 在react事件中，是异步的
    //setState 是可以触发视图更新的
    this.setState({
      num:  ++ n
    },()=>{
      console.log(this.state.num)
    });
  };

  render() {
    let { num } = this.state; //从state中解构出num
    return (
      <div className="">
        <h2>当前数字是{num}</h2>
        {/* react 事件是原生事件变成小驼峰即可 */}
        <button onClick={this.add2}>class</button>

        {/* 使用bind的这种写法，事件对象是处在实参的最后一位 */}
        <button onClick={this.add.bind(this, 100)}>bind</button>

        {/* 箭头函数随意，e可传可不传，实参具体是什么看对应位置传的什么 */}
        <button onClick={() => { this.add(100); }} > 箭头 </button>

        <button>-</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// export default App
