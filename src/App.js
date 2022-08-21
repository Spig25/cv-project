import React, { Component } from "react";
import CompletedForm from "./components/CompletedForm";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";
import "./styles/style.css";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <form className="input-container">
          <GeneralInfo />
          <Experience />
          <Education />
          <button type="button">Add</button>
        </form>
        <div className="finished-container"></div>
      </div>
    );
  }
}

export default App;
