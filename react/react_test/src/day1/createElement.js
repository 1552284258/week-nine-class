import React, { createElement } from 'react';
// function Crt(){
//     return(
//         <div>
//             hello
//             <h2>World</h2>
//         </div>
//     )
// }
function Crt(){
    let ele = React.createElement('div',{className:'qqq',t:12},'hello')
    return ele
}
export default Crt;