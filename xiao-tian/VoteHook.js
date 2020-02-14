import React, { useState, useEffect, useRef, useReducer } from "react";

let [state, changeNum] = useState(function init() {
  // 初始值写成函数方式的好处
  // 1.可以在这里根据不同业务场景，赋值不一样的初始值
  // 2.只会在第一次渲染组件的时候赋值初始值，后期组件重新渲染，当前操作不再执行，属于一个优化操作
});

//官方推荐写法
export default function VoteHook(props) {
  let [supNum, changeSupNum] = useState(0); //0可以理解成初始状态值s
  let [oppNum, changeOppNum] = useState(0);

  //useRef 让其可以进行DOM操作
  //  1.使用ref
  //  2.想要获取哪个DOM元素就给其赋值给DOM的ref属性
  //  3.基于current属性可以获取到DOM元素
  let num = useRef();
  // <h3 ref={num}>{props.title}</h3>

  return (
    <div className="">
      <header>
        <h3 ref={num}>{props.title}</h3>
      </header>
      <main>
        <p>支持人数：{supNum}</p>
        <p>反对人数：{oppNum}</p>
        <p>支持率：--</p>
      </main>
      <footer>
        <button
          onClick={ev => {
            changeSupNum(++supNum);
          }}
        >
          支持
        </button>
        <button
          onClick={ev => {
            changeOppNum(++oppNum);
          }}
        >
          反对
        </button>
      </footer>
    </div>
  );
}

// export default function VoteHook(props) {
//   //=>状态管控两个状态，此时我们采用的是一个变量存储对象的格式
//   let [state, changeNum] = useState({
//     supNum: 0,
//     oppNum: 0
//   });
//   return (
//     <div className="">
//       <header>
//         <h3>{props.title}</h3>
//       </header>
//       <main>
//         <p>支持人数：{state.supNum}</p>
//         <p>反对人数：{state.oppNum}</p>
//         <p>支持率：--</p>
//       </main>
//       <footer>
//         <button onClick={
//             ev=>{
//                 //和setState不一样的地方，他不能实现局部状态更新，每一次更新都是吧之前的值改成一个新值(稍不注意就会把值的某个状态干没)，所以再修改之前我们最好把之前的值克隆一份！
//                 changeNum({
//                     ...state,
//                     supNum:++state.supNum
//                 })
//             }
//         }>支持</button>
//         <button>反对</button>
//       </footer>
//     </div>
//   );
// }

// /**
//  * React Hooks
//  *  React提供的Hooks函数，目的是让”函数式组件“能有用类似于“类组件”的一些效果
//  *  => useState在函数式组件中应用状态
//  *  => useEffect 拥有生命周期函数
//  *  => useRef 让其使用DOM
//  *  => useReducer 让其能够像redux一样管理状态
//  *  => ...
//  */
// export default function VoteHook(props) {
//   /**
//    * useState 应用状态
//    *  @params
//    *      initState初始状态值(也可以是个函数，函数中返回初始状态值)
//    *  @return
//    *      数组：[状态,更改状态的方法]
//    */
//   let [supNum, changeSupNum] = useState(0); //0可以理解成初始状态值s
//   return (
//     <div className="">
//       <header>
//         <h3>{props.title}</h3>
//       </header>
//       <main>
//         <p>支持人数：{supNum}</p>
//         <p>反对人数：0</p>
//         <p>支持率：--</p>
//       </main>
//       <footer>
//         <button
//           onClick={ev => {
//               //更改状态(直接传递需要更改的值即可):会通知组件重新渲染，类似于setState
//             changeSupNum(++supNum);
//           }}
//         >
//           支持
//         </button>
//         <button>反对</button>
//       </footer>
//     </div>
//   );
// }
