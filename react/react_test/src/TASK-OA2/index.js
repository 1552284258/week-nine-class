import React, { createElement } from 'react'
import ReactDom from 'react-dom'
import Task from './pages/Task'

/* redux */
import{provide}from 'react-redux'
import store from './store/index'

/* ANTD */
import {ConfigProvider} from 'antd'
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';

/* 公共样式 */
// import './assets/reset.min.css'
// import './assets/common.less'

ReactDom.render(<provide store={store}>
    <Task></Task>
</provide>,document.getElementById('root'))