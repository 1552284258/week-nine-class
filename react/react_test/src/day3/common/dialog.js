import React from "react";
import "../less/dialog.less";

class Dialog extends React.Component {
  constructor() {
    super();
    this.state = {
      flag: false
    };
  }

  render() {
    let { title, visible, children, onOK, onCancel } = this.props;
    let{flag}=this.state
    let that = this;
    function ok() {
      that.setState({
        flag: true
      });
      setTimeout(() => {
          onOK()
          that.state.flag=false
      }, 500);
    }
    function cancel() {
      that.setState({
        flag: true
      });
      setTimeout(() => {
        onCancel()
        that.state.flag=false
    }, 500);
    }
    return (
        
      <div className="">
        <div
          className={"mask" + (flag ? " reverse" : "")}
          style={{ display: visible ? "block" : "none" }}
        >
          <div className="contentBox">
            <header>{title || "默认title"}</header>
            <main>{children}</main>
            <footer>
              <button
                onClick={() => {
                  cancel();
                }}
              >
                取消
              </button>
              <button
                onClick={() => {
                  ok();
                }}
              >
                确定
              </button>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Dialog;
