import React, { Component } from "react";
import "./App.css";
import Card from "./Components/Card";
import ReviewPage from "./Components/ReviewPage";
import path from 'path';

class App extends Component {
  render() {
    const __dirname = __dirname;
    return (
      <div className="App">
        <ReviewPage />
      </div>
    );
  }
}

export default App;
export default __dirname;