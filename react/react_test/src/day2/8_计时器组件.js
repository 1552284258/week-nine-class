import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleString(),
      timer: null
    };
  }
  start = () => {
    //一秒一更新 timer 即可
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toLocaleString()
      });
      console.log(666);
    }, 500);
   
  };
  render() {
    let { time } = this.state;
    return (
      <div>
        <h1>当前时间是：{time}</h1>
        <button onClick={this.start}>计时开始</button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="">
        <Clock />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
