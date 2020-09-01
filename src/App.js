import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      {/**  このファイルで各画面の遷移することを設定する。 React-ROOTER*/}
      <Router>
        <Switch>
          {/**  検索　localhost.com/checkout */}
          <Route path="/checkout">
            <Header />
            <h1>checkout</h1>
          </Route>
          {/**  ログイン　localhost.com/login*/}
          <Route path="/login">
            <Header />
            <h1>login</h1>
          </Route>
          {/**  デフォルト　ホームページ localhost.com/  一番下に設定する*/}
          <Route path="/">
            {/** この画面読む時、Header.js,Home.jsファイルを読み込んで、Header.jsの内容を表示される */}
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
