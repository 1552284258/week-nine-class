import React from 'react'

/**
 * PureComponent默认会给当前组件设置shouldComponentUpdate周期函数(提前是用户自己没有设置，以用户自己设置的为主)
 *  1.在这个函数中，默认进行了关于原始属性/状态和最新要修改的属性/状态的一个*浅比较*
 *      - 对于引用类型来说，浅比较 比较的只是地址
 *  2.通过浅比较判断是否相等后，如果返回true才不会通知视图渲染
 */
export default class Test extends React.Componeont{
    state={
        arr:[10,20]
    };
    render(){
        return <div>
            {this.state.arr.join('+')}
            <button onClick={this.handle}>点我</button>
        </div>
    };
    handle=()=>{
        let arr = this.state.arr;
        arr.push(30)
        this.state.setState({
            //为了防止PureComponent的浅比较，我摩恩一般都要把引用类型值克隆一份新的再重新赋值
            arr:[...arr]
        })
    }
}