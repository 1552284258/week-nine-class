import React from "react";
//在js中写html结构  是由于babel在起作用
//在react中 变量是要通过 {变量} 的方式编写
//  react 的 {} 相当于 vue的 {{}} 里边能写表达式，不能写 语句
import Img from './img'
 var str = "hello world";

function f1(name){
    return(
        <div>
          <Img></Img>
            你好{name}
        </div>
    )
}

function Hello() {
  return (
    <div>
      <h2>hello world</h2>
      <h1>{str}</h1>
        {f1('zhufeng')}
    </div>
  );
}

function Hello2(){
    return(
        <h3>nihao shijie </h3>
    )
}

export default {Hello,Hello2};
