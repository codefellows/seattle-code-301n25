import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p>testing, testing, is this thing on....?</p>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
