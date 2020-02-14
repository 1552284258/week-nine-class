import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.www = React.createRef()
    
  }
  componentDidMount(){
      console.log(this.refs)
      console.log(this.qqq)
      console.log(this.www.current)
  }
  render() {
      //ref 只能获取最后一个元素
      //第一种写法：直接写成 ref='qqq'   //已过时
      //第二种写法：可以写成 ref={(ele)+>{this.qaq=ele}}
      //第三种写法：在constructor中写this.www = React.createRef()  this.www.current
    return (
      <div className="">
        {[1, 2, 3, 4, 5].map(item => {
          return <h2 ref='h2' key={item}>{item}</h2>;
        })}
        <h3 ref={(ele)=>{this.qqq=ele}}>ax</h3>
        <h1 ref={this.www}>啊啊啊啊</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
