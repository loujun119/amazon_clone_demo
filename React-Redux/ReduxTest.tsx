/* 
React-Redux
説明：Reduxの作者はReactに対して、React-Reduxという専用のライブラリーを作成する。
React-Reduxはコンポーネントを２種類分けられる。
一，UI component,画面に表示されるものです。
二， container component,画面表示用のstateを設定して、UI componentに出力する。
容器组件的特征：
  负责管理数据和业务逻辑，不负责UI的呈现
  带有内部状态（画面初始化需要的数据，以及更新后获得的数据等）
  使用 Rddux的API

总之，UI组件负责UI的呈现，容器组件扶着管理数据的逻辑。
如果一个组件既有UI，又有业务逻辑的话，将他拆分成下面的结构
外层是一个容器组件，里面包裹一个UI组件。
前面负责与外部通信，将数据传递给后者，后者负责渲染，更新出视图。

React-Redux规定，所有的UI组件都有用户提供，容器组件则是由React-Redux自动生成。

三，connect()方法
React-Redux提供了connect方法，用于从UI组件生成容器组件。
container的业务逻辑分为
1.输入逻辑，外部的数据（即state对象）如何转换为UI组件的参数。
2.输出逻辑，用户发出的动作如何变为Action对象，从UI组件传出去。
例：
import {connect} from "react-redux";

const VisibleTodoList = connect(
  mapStateProps,
  mapDispatchToProps
)(TodoList)

上面代码中，connect方法接受2个参数：mapStateToProps 和 mapDispatchToProps。
他们定义了UI组件的业务逻辑。前者负责输入逻辑，即将state映射到UI组件的参数（props）,
后者负责输出逻辑，即在视图层发起的操作映射成Action。

四，mapStateToProps()
mapStateToProps是一个函数，他的作用就像名字一样，建立一个从（外部插入的import）
state对象到（UI组件的）props对象的映射关系。
作为函数，mapStateToProps执行后应该返回一个对象，里面的每一个键值对就是一个映射。
例：
const mapStateToProps = (state) => {
    return{                                  可视化监听器
    todos:getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

  上面代码中，mapStateToProps是一个函数，它接受state作为参数，返回一个对象。
这个对象有个todos属性，代表UI组件的同名参数，后面的getVisibleTodos也是一个函数，
可以从state算出todos的值。
下面的例子就是用getVisibleTodos,来算出todos

const getVisibleTodos = (todos,filter) => {
    switch(filter){
    case 'SHOW_ALL':
       return todos
    case 'SHOW_COMPLETED':
       return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
       return todos.filter(t => !t.completed)
    default:
       throw new Error('Unkonw filter:' + filter)
    }
}

  mapStateToProps会订阅Store,每当state更新的时候，就会自动执行，重新计算UI组件的参数，
从而触发UI组件的重新渲染。
  mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。
容器组件的代码
    <FilterLink filter="SHOW_ALL">
     ALL
    </FilterLink>
 const mapStateToProps = (state, ownProps) => {
   return {
     active:ownProps.filter === state.visibilityFilter
   }
 }
  使用ownProps作为参数后，如果容器组件的参数发生变化，也会引发UI组件重新渲染。
  connect方法可以省略mapStateToProps参数，那样的话，UI组件就不会订阅Store，就是说Store
  的更新不会引起UI组件的更新。

五，mapDispatchToProps()
  mapDispatchToProps是connect函数的第二个参数，用来建立UI组件的参数到store.dispatch方法的映射。
也就是说，他定义了那些用户的操作应该当作Action,传给Store。它可以是一个函数，也可以是一个对象。

  如果MapDispatchToProps是一个函数，会得到dispatch和ownProps(容器组件的props)两个参数

  const mapDispatchToProps = (dispatch,ownProps) => {
    return {
      onClick:() => {
        disptch({
          type:'SET_VISIBILITY_FILTER',
          filter:ownProps.filter
        });
      }
    };
  }

  上面的代码中，mapDispatchToProps作为函数，应该返回一个对象，该对象的每个键值对
都是一个映射，定义了UI组件的参数怎样发出Action。
  如果mapDispatchToProps是一个对象，它的每个键名也是对应UI组件的同名参数，
  键值应该是一个函数，会被当做Action creator,返回的Action 会有Redux自动发出。
  上例如果写成对象的话就是以下的方式：
  const mapDispatchToProps ={
    onClick:(filter) => {
      type:'SET_VISIBILITY_FILTER',
      filter:filter
    }
  }

六，<Provider>组件
  connect方法生成容器组件后，需要让容器组件拿到state对象，才能生成UI组件的参数。
方法1，将state对象作为参数，传入容器组件。但对于大型项目的深层结构来说很复杂。
方法2，React-Redux提供的Provider组件，可以让容器组件拿到state。
方法3，React HOOK的 useState,useConnect函数，也可以从外部拿到参数，生成UI组件。

  import { Provider } from 'react-redux';
  import { createStore } from "redux";
  import todoApp from "./reducers";
  import App from "../src/App.js"

  let store = createStore(todoApp);

  reder(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )

  上面代码中，Provider在根组件外面包了一层，这样一来，App的所有子组件就默认可以拿到State了。
  他的原理是React组件的context属性

七，实例：计数器

  纯UI组件
  founction Counter() {
    render(
      const { value, onIncreaseClick } = props;
      return(
        <div>
          <span>{value}</span>
          <button onClick={onIncreaseClick}> Increase </button>
        </div>
      )
    );
  }
  上面代码中，这个UI组件有2个参数，value和onIncreaseClick。前者需要从state计算得到，
后者需要向外发送出Action。
  接着定义value到state的映射，以及onIncreaseClick到dispatch的映射。

  function mapStateToProps(state){
    return {
      value: state.count
    }
  }

  mapDispatchToProps = (dispatch) => {
    return{
      onIncreaseClick: () => dispatch(increaseAction)
    }
  }
  //Action Creator
  const increaseAction = {type:'increase'}

  使用connect方法生成容器组件。
  const App = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Counter)

  然后，定义这个组件的Reducer。
  //Reducer
  function counter( state = { count : 0 }, action){
    const count = state.count
    switch (action.type){
      case 'increase':
        return {count: count + 1}
      default:
        return state
    }
  }

  最后，生成store对象，并使用Provider在根组件包裹一层
  import { loadState, saveState } from './localStorage';

  const persistedState = loadSate();
  const store = createstore(
    todoApp,
    persistedState
  );

  Store 允许使用store.subscribe方法设置监听函数，
         一旦 State 发生变化，就自动执行这个函数。
  store.subscribe(throttle( () => {
    saveState({
      todos:store.getState().todos,
    })
  }, 1000))

  ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

八、React-Router 路由库
  使用React-Router的项目，与其他项目没有不同之处，也是使用Provider在Router外面包一层，
  毕竟Provider的唯一功能就是传入store对象。
  const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
  );



*/
import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
};

// Action
const increaseAction = { type: "increase" };

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count;
  switch (action.type) {
    case "increase":
      return { count: count + 1 };
    default:
      return state;
  }
}

// Store
const store = createStore(counter);

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count,
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
  };
}

// Connected Component
const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
