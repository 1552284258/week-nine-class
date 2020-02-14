import React from "react";
import ReactDOM from "react-dom";

const connect = (Temp)=>{
    return class App extends React.Component{
        render(){
            return <div>
                <Temp q={123} w={234} e={[3,4,5]} {...this.props}></Temp>
            </div>
        }
    }
}

class Child extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {

    if (nextProps.name === this.props.name) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>hello world {this.props.name}</h2>
        <h2>{this.props.age}</h2>
      </div>
    );
  }
}
Child = connect(Child)
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      qqq: "珠峰",
      age: 18
    };
  }
  render() {

    return (
      <div className="">
        <input
          type="text"
          value={this.state.qqq}
          onChange={e => {
            this.setState({ qqq: e.target.value });
          }}
        />
        <input
          type="text"
          value={this.state.age}
          onChange={e => {
            this.setState({ age: e.target.value });
          }}
        />
        <Child name={this.state.qqq} age={this.state.age}></Child>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
