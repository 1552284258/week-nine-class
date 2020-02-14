import React from 'react'
import ReactDom from 'react-dom'

function Child(props){
    console.log(props)
    let {className , qqq , children} = props
    return (
        <div className={className||''}>
            <h2>这是一个子组件</h2>
            {qqq.a}
            {
                children
            }
        </div>
    )
}
//在组件的行内编写的属性，组件可以通过形参接收  
//react组件不存在 slot  只有 children
ReactDom.render(<Child className='box' qqq={{a:12,b:34}}>
    <div>
        <strong>乆</strong>
    </div>
    <div>
        <strong>二</strong>
    </div>
</Child>,document.getElementById('root'))