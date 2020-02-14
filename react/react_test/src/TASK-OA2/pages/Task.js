import React from "react";
import "./Task.less";
import api from "../api/index";
import { connect } from 'react-redux'
import { Button, Tag, Table, Modal, Input, DatePicker, message } from "antd";
import moment from "moment";
const { TextArea } = Input;
const { confirm } = Modal

const nowNext = moment(
    new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
        .toLocaleString()
        .replace(/[\u4e00-\u9fa5]/g, "")
);

class Task extends React.Component {
    state = {
        columns: [
            {
                title: "编号",
                dataIndex: "id",
                width: "10%"
            },
            {
                title: "描述",
                dataIndex: "task",
                width: "30%"
            },
            {
                title: "时间",
                render: text => {
                    let { time, complete, state } = text;
                    if (state == 2) {
                        time = complete;
                    }
                    // 2020-01-11 18:00:00
                    let timeArr = time.match(/\d+/g); //['2020','1','11','18','00','00']
                    return "{1}-{2} {3}:{4}".replace(/\{(\d+)\}/g, (val, $1) => {
                        let res = timeArr[$1] || "0";
                        return res.length < 2 ? "0" + res : res;
                    });
                },
                width: "15%"
            },
            {
                title: "状态",
                dataIndex: "state",
                render: (text, record, index) => {
                    /**
                     * text:当前列展示的数据，如果没有设置dataIndex，它的值和record一样
                     * record：当前行对应数据
                     * index：当前行索引
                     */
                    return text == 1 ? "未完成" : "完成";
                },
                width: "15%"
            },
            {
                title: "操作",
                render: text => {
                    let { state } = text;
                    return (
                        <>
                            <Button
                                type="link"
                                onClick={this.handleDel.bind(this, text)}>
                                删除
              </Button>
                            {state == 1 ? <Button type="link">完成</Button> : null}
                        </>
                    );
                },
                width: "20%"
            }
        ],
        visible: false, //=>控制Modal的显示隐藏
        dataSource: [
            {
                id: 1,
                task: "巴拉巴拉巴拉巴拉哔哩哔哩白萝卜吧啦吧啦吧啦吧",
                state: 1,
                time: "2020-01-11 18:00:00",
                complete: "2020-01-11 18:00:00"
            }
        ],
        //=>控制输入内容
        task: "",
        time: nowNext,
        //控制页卡
        tagList: [
            {
                state: 0,
                text: "全部",
                selected: true
            },
            {
                state: 1,
                text: "未完成",
                selected: false
            },
            {
                state: 2,
                text: "已完成",
                selected: false
            }
        ]
    };
    //删除任务
    handleDel = text => {
        console.log(text)
        let { id } = text
        confirm({
            title: '这是一个危险的操作',
            content: `确定要删除编号为 ${id} 的任务信息吗？`,
            okType: 'danger',
            onOk: async () => {
                let result = await api.task.removeTaskList(id);
                let { code } = result;
                if (parseInt(code) == 0) {
                    message.successs('删除成功')
                    this.props.deleteTask(id)
                    return;
                }

                message.error("删除失败，请稍后再试");
            }
        })
    };
    //完成任务
    //新增任务
    handleOk = async () => {
        let { task, time } = this.state;
        if (task.trim().length === 0) {
            message.warning("任务描述不能为空");
            return;
        }
        if (!time) {
            message.warning("预期完成时间不能为空");
        }
        time = time.toDate();
        time = `${time.getFullYear()}-${time.getMonth()}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}}`;
        //把信息发送给服务器
        let result = await api.task.addTask(task, time);
        let { code } = result;
        if (parseInt(code) === 0) {
            //成功
            message.success("新增任务成功");
            this.handleCancel();
            this.props.asyncTaskList()
            return;
        }
        //失败
        message.error("新增任务失败，请稍后再试");
    };
    handleCancel = () => {
        this.setState({
            task: "",
            visible: false
        });
    };
    changeSelect = () => {
        //修改tag选中项
        let state = parseInt(localStorage.getItem("stage")) || 0;
        let tagList = this.state.tagList;
        tagList = tagList.map(item => {
            item.selected = item.state === state ? true : false;
            return item;
        });
        this.setState({ tagList });

    }
    changeTag = ev => {
        let target = ev.target,
            state = target.getAttribute("state");
        if (target.tagName !== "span") return;
        state = parseInt(state);
        //把当前选中结果向本地存储一份
        localStorage.setItem('state', state)
        this.changeSelect()
    };
    render() {
        let { columns, visible, task, time, tagList } = this.state;
        let { taskList } = this.props
        //根据选中态筛选要展示的数据
        let state = parseInt(localStorage.getItem('state')) || 0
        let data = taskList;
        if (state !== 0) {
            data = data.filter(item => parseInt(item.state) === state);
        }


        return (
            <section className="taskBox">
                <header className="headerBox">
                    <h2>TASK OA 任务管理系统</h2>
                    <Button
                        type="primary"
                        onClick={ev => {
                            this.setState({ visible: true });
                        }}
                    >
                        新增
          </Button>
                </header>

                <nav className="navBox" onClick={this.changeTag}>
                    {tagList.map(item => {
                        return (
                            <Tag
                                state={item.state}
                                key={item.state}
                                color={item.selected ? "#108ee9" : ""}
                            >
                                {item.text}
                            </Tag>
                        );
                    })}
                </nav>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    rowKey="id"
                ></Table>

                {/* 新增的对话框 */}
                <Modal
                    title="新增任务"
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>任务描述</p>
                    <TextArea
                        rows={4}
                        value={task}
                        onInput={ev => {
                            this.setState({ task: ev.target.value });
                        }}
                    ></TextArea>
                    <p>预期完成时间：</p>
                    <DatePicker
                        showTime
                        onChange={ev => {
                            this.setState({
                                time: ev
                            });
                        }}
                        defaultValue={moment(time)}
                    ></DatePicker>
                </Modal>
            </section>
        );
    }
    componentWillMount() {
        this.changeSelect()
        this.props.asyncTaskList()
    }
}

export default connect(state => state.task)(Task)
