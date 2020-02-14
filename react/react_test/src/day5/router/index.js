import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Route, Link, NavLink, Switch} from "react-router-dom";
/**
 * BrowserRouter 相当于vue-router 的 history模式
 * HashRouter    相当于vue-router 的 hash模式
 * Route         相当于vue-router 的 router-view
 * Link          相当于vue-router 的 router-link
 */

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>首页组件</h1>
      </div>
    );
  }
}
class List extends React.Component {
  render() {
      //编程式导航： this.props.history.push('/home')
    return (
      <div>
        <h1>列表页组件</h1>
        <NavLink to="/list/l1">L1</NavLink> {/* 会添加活动类名 */}
        <NavLink to="/list/l2">L2</NavLink>
        <Route path="/list/l1" render={_ => <h3>列表组件1</h3>}></Route>
        <Route path="/list/l2" render={_ => <h3>列表组件2</h3>}></Route>
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
          
        <Link to="/home">首页</Link>  {/* 不会添加活动类名 */}
        <Link to="/list">列表</Link>
        {/* <Route path='/home' render={_=><h1>首页</h1>}>1234</Route>
        <Route path='/list' render={_=><h1>列表</h1>}></Route> */}
        <Route path='/' exact>123456789</Route> {/* exact 精确匹配 */}
        <Switch> 
            {/* Switch组件的作用就是：当匹配到一个路径之后，下边的路径就不再查看 */}
            <Route path="/home" component={Home}></Route>
            <Route path="/list" component={List}></Route>
            <Route path='/' exact>66666</Route>
            <Route render={()=><h3>404</h3>}></Route>
        </Switch>
      </div>
    );
  }
}

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
