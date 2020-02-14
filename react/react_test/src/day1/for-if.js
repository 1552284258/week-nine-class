import React from 'react';
var ary = [1,2,3,4]
var obj = {q:1,w:2}  // 不能在结构中展示对象

//在react 中的循环结构，我么一般使用map
//在react 中的判断 我们一般使用 三元运算符
function For(){
    return(
        <ul>
            {ary}

            {/* {obj} 报错 */}
            {
                Object.keys(obj).map(item=>{
                    return(
                <h3 key={item}>属性名是{item},属性值是{obj[item]}</h3>
                    )
                })
            }
            {/* <li>1</li>
            <li>2</li>
            <li>3</li>
             */}
            {
                ary.map(item=>{
                    return(
                    <li key={item}>{item}</li>
                    )
                })
            }
            {
                1>2?<h2>成立</h2>:<h2>不成立</h2>
            }
        </ul>
    )
}
export default For