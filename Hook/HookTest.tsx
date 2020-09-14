{
  /* 
  Hook 时react 16.8的新增特性。
  它可以让你在不编写class的情况下使用state以及其他的React特性。
  Class Component
  
  
  class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
  
    render() {
      return (
        <div>
          <p> You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
        </div>
      );
    }
  }
  state的初始值为{count:0},点击按钮后，通过this.setState()来增加 state.count。
  变更后的count，重新渲染后，在页面显示。
  
  Hook 和函数组件
  
  const Example =  (props) => {
      //可以在这里使用Hook
      return <div />
  }
  或
  function Example(props){
      //可以在这里使用Hook
      return <div />
  }
  
  Hook 在class内部是不起作用的。
  
  class组件里：props,state来对需要的变量进行修改。
  函数组件里:使用Hook来引入外部变量。
  */
}

import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);
}
