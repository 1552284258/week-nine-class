import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class Child extends React.Component {
    //propTypes  这个词是 react规定的词汇
    //一般与propTypes结合使用，用来控制参数类型的
  static propTypes = {
    title: PropTypes.string.isRequired, //说明类型需要是一个字符串   而且是必须的(isRequired)
    data: PropTypes.object //
  };
  //defaultProps 用来给参数默认值的 
  static defaultProps={
    title:'这是个默认的title'
  }
  render() {
    return (
      <div>
        <header>{this.props.title}</header>
        <main>{this.props.children}</main>
        <ul>
          {Object.values(this.props.data).map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
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
        <Child  data={{ name: "zf", age: "10" }}>
          <h2>这是插槽内容1</h2>
          <h2>这是插槽内容2</h2>
          <h2>这是插槽内容3</h2>
        </Child>
      </div>
    );
  }
}

// export default App
ReactDOM.render(<App />, document.getElementById("root"));
