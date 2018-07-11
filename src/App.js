import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card";
import ReviewPage from "./Components/ReviewPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReviewPage />
      </div>
    );
  }
}

export default App;
