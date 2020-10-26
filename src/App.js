import React from "react";
import { configStore } from "./store/store";
import { Provider } from "react-redux";
import "./App.css";
import Router from "./router/router.router";

const App = () => {
  const store = configStore();

  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
};

export default App;
