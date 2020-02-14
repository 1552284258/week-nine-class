import ReactDom from 'react-dom'
import React from 'react'
import Hello from './1'
import Clock from './3_计时器'

ReactDom.render(
<div>
<Hello/>
<Clock/>
</div>,document.getElementById('root'),function(){
    //DOM挂载完成之后触发
})