import React from "react";
import ReactDom from "react-dom";
import Model from '../day3/common/dialog'
import "./less/dialog.less";

class Dialog extends React.Component {
  render() {
    let { title, visible, onOK, onCancel, children } = this.props;
    //从props中，把 title,visible,onOK,onCancel获取到
    return (
      <div className="mask" style={{display: visible ? 'block' : 'none' }}>
        <div className="contentBox">
          <header>{title || "默认title"}</header>
          <main>
            {/* {this.props.children} */}
            {children}
          </main>
          <footer>
            <button onClick={onCancel}>取消</button>
            <button onClick={onOK}>确定</button>
          </footer>
        </div>
      </div>
    );
  }
}
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: true
    };
  }
  ok = () => {
    console.log("OK");
    this.setState({
      isShow: false
    });
  };
  cancel = () => {
    console.log("cancel");
    this.setState({
      isShow: false
    });
  };
  render() {
      let{isShow}=this.state
    return (
      <div className="">
          <button onClick={()=>{this.setState({isShow:true})}}>显示Dialog</button>
        <Model
          title="这是标题"
          visible={isShow}
          onOK={this.ok}
          onCancel={this.cancel}
        >
          <h2>这是内容部分</h2>
          <h2>这是内容部分</h2>
          <h2>这是内容部分</h2>
        </Model>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
