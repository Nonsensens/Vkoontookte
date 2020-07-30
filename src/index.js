import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

//setInterval(() =>{ store.dispatch({type:'FAKE'}, 1000)})


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();

