import { createElement } from "react"
import { render } from "react-dom"

// React.CreateElement
// ReactDom.render

class Element{
    constructor(tagName,props={},children){
        this.tagName = tagName;
        this.props = props;
        this.children = children;
    }
    render(){
        let ele = document.createElement(this.tagName);
        for(let k in this.props){
            ele.setAttribute(k,this.props[k])
        }
        this.children.forEach(item => {
            //需要查看当前这个子节点到底是元素还是文本
            //若是Element的实例，则需要append的是render之后的那个实际的元素
            item instanceof Element ? ele.appendChild(item.render())
            :ele.appendChild(document.createTextNode(item))
            //若是文本，则需要append的是这个 文本节点
        });
        return ele
    }
}

const React = {
    //第一个参数是标签名，第二个是行内属性，在后边就都是子结构
    createElement(tagName,props,...children){
       return new Element(tagName,props,children)
    }
}

const ReactDom ={
    render(ele,root){
        root.appendChild(ele.render()) 
    }
}

let App  =  React.createElement('div',{className:'box'},
  React.createElement('h2',null,'hello world'),'你好世界');

ReactDom.render(App,document.getElementById('root'))