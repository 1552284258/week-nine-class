import React from "react";
var imgUrl = 'http://www.zhufengpeixun.cn/main/img/banner01.png'
function Img(){
    //在react 中 行内属性 有是通过 {} 赋予的
    //在react 中 class属性 必须写成 className
    //在react 中 编写行内属性是，必须使用对象的方式
    return(<img src={imgUrl}
        //  className='qqq'
            className={'qqq '+ (1>2?'www':'eee')} 
            style={{color:'red',width:'100%'}}
            />)
}

export default Img