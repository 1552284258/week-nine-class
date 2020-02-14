import React from "react";

var str = "珠峰";
var CLN = "box";
var ary = [1, 2, 3];
var obj = { a: 12, b: 24, color: "red" };
function fn(arr=[]) {
  let t = [];
  for (var i = 0; i < arr.length; i++) {
    t.push(<li key={i}>{arr[i]}</li>);
    return t
  }
}
function Hello() {
  return (
    <div>
      <h1 className={"qqq " + CLN + " www"}>Hello World</h1>
      <h2 style={obj}>{str}</h2>
      <h3 style={{ color: "blue", background: "yellow" }}>{ary}</h3>
      <h4>{Object.values(obj)}</h4>
      <ul>
        {ary.map(item => {
          return <li key={item}>{item}</li>;
        })}
        {fn(ary)}
      </ul>
      {
        1>2?
        <h1>成立</h1>:
        4>3?
        <h3>成立2</h3>:
        <h2>不成立</h2>
      }
    </div>
  );
}

export default Hello;
