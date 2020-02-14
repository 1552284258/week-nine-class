import React from 'react'
import ReactDom from 'react-dom'

console.log(1111,React.Component)
class Child extends React.Component{
    constructor(props){
        super(props)
        // this.props = props
        this.state={ //相当于Vue的data
            name:'wx',
            age:18,
            sex:'男'
        }
    }
    fn1(){}
    static fn={qqq:123}
    render(){
        console.log(123,this.props) //在render中，我们可以直接使用                                          this.props,去直接过去参数
        let {className,data}=this.props
        let {name,age,sex}=this.state
        return(
            <div>
                class 组件
                内容是{JSON.stringify(data)}
                {name}{age}{sex}
            </div>
        )
    }
}

ReactDom.render(<Child className='box' data={{name:'zf'}} />,document.getElementById('root'))