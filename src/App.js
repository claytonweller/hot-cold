import React, { Component } from "react";
import HotOrCold from "./components/HotOrCold";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hot or Cold</h1>
        <Provider store={store}>
          <HotOrCold />
        </Provider>
      </div>
    );
  }
}

export default App;
