import React from 'react';
import ReactDom from 'react-dom'

function Clock(){
    return(
        <h1>
            当前时间是：{new Date().toLocaleString().replace(/(上午|下午|中午)/g,'').replace(/[/]/g,'-')}
        </h1>
    )
};

setInterval(()=>{
    ReactDom.render(<Clock/>,document.getElementById('root'))
},1000)


// export default Clock