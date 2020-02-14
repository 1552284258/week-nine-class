import React from "react";
import ReactDOM from "react-dom";
import { Button, Input, List, Modal } from "antd";
let { confirm } = Modal;
class Input2 extends React.Component {
  render() {
    let { placeholder, value, onChange } = this.props;
    return (
      <div>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      val: "",
      data: []
    };
  }
  change = e => {
    this.setState({
      val: e.target.value
    });
  };
  submit = () => {
    if (!this.state.val) return;
    //方法一
    // this.state.data.unshift(this.state.val)
    // this.state.val=''
    // this.setState({})

    //方法二
    this.setState({
      data: this.state.data.concat(this.state.val),
      val: ""
    });
  };
  del = index => {
    confirm({
      title: "Are you sure delete this task?",
      content: "Some descriptions",
      okText: "删除",
      okType: "danger",
      cancelText: "取消",
      onOk: () => {
        this.state.data.splice(index, 1);
        this.setState({});
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };
  confitDel = index => {};
  render() {
    let { val, data } = this.state;
    return (
      <div className="">
        <Input
          style={{ width: "400px" }}
          placeholder="目标"
          value={val}
          onChange={this.change}
        />
        <Button onClick={this.submit}>提交</Button>
        {/* <Input2 placeholder='目标' value={val} onChange={this.change}/> */}
        <List
          size="small"
          style={{ width: "400px" }}
          header={<div>目标</div>}
          footer={<div>已完成： </div>}
          bordered
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              {
                <>
                  <h3>{item}</h3>
                  <Button type="danger" onClick={() => this.del(index)}>
                    删除
                  </Button>
                  {/* this.del.bind(this,index) */}
                </>
              }
            </List.Item>
          )}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
