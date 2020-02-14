import React from 'react'
import ReactDom from 'react-dom'

// function App(){
//     return(
//         <div className='box'>
//             <h2>hello world</h2>
//             你好世界
//         </div>
//     )
// }
function App(){
    return React.createElement('div',{className:'box'},React.createElement('h2',null,'Hello-World'),'你好世界')
}

ReactDom.render(<App/>,document.getElementById('root'))
            // 注意*尖括号*