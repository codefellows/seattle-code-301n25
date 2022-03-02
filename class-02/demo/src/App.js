import React from "react";
import "./App.css";
import Parent from './Parent';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>State and Props</h1>
        <Parent />
      </div>
    );
  }
}

export default App;
