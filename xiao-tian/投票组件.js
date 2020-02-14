import React from "react";
import PropTypes from "prop-types";

/**
 * 给属性设置规则：prop-types （是个插件，得安装）
 *  - 设置默认值
 *  - 设置传递的值类型和是否必传等
 */

class Vote extends React.Component {
  //Vote.defaultProps={}
  //Vote.propTypes={}
  static defaultProps = {
    //设置传递属性的默认值
    supNum: 0,
    oppNum: 0
  };
  static propTypes = {
    //规则
    title: PropTypes.string.isRequired,
    supNum: PropTypes.number,
    oppNum: PropTypes.number
  };
  //初始化状态 ES7中规定下属写法是直接给实例设置属性
  state = {
    //把传递的属性值赋值给状态，目的是后续可以修改这些值，
    supNum: this.props.supNum,
    oppNum: this.props.oppNum
  };

  render() {
    let { title } = this.props;
    let { supNum, oppNum } = this.state
    handle=(type)=>{
        /**
         * react 中的诗句绑定是合成事件绑定(获取的事件对象也是合成事件对象)
         *  ->合成事件是基于事件委托实现的，目的是实现PC和移动端的兼容性；例如移动端的click存在300MS        的延迟，我们设置的onClick在PC端被识别为click，在移动端别识别为touch事件模型
         *  ->事件对象也是react内部合成的一套对象，但是对于我们获取和操作没有影响，因为它把每一个属性        值都get/set了
         *  ->persist()  可以把合成事件转换为与原生类似 ，实际没啥用
         */
        //支持
        if(type == 'sup'){
            this.setState({
                supNum:this.supNum + 1
            })
            return
        }
        //反对
        this.setState({
            oppNum:this.supNum - 1
        })
    }
    return (
      <div className="">
        <header>
          <h3>{title}</h3>
          <span>{supNum + oppNum}</span>
        </header>
        <main>
          <p>支持人数：{supNum}</p>
          <p>反对人数：{oppNum}</p>
          <p>支持率：--</p>
        </main>
        <footer>
          <button onClick={this.handle.bind(this,'sup')}>支持</button>
          <button onClick={this.handle.bind(this,'opp')}>反对</button>
        </footer>
      </div>
    );
  }
}

export default Vote;

/**
 * ReactDOM.render(<>
 *  <Vote title='hahah'/>
 *  <Vote title='hehhe' supNum={100}/>
 * </Vo>,document.getElementById('root'))
 */
