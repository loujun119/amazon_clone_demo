import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  {/** React.StrictMode 在开发模式下develop，开启严格模式，运行时，执行各种检查 */}
  <React.StrictMode>
    {/** StateProvider 把component发起的action中需要的数据传到reducer中 */}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
