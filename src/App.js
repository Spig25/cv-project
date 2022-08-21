import React, { Component } from "react";
import CompletedForm from "./components/CompletedForm";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";
import "./styles/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState(
      {
        [e.target.id]: e.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div className="App">
        <form className="input-container">
          <GeneralInfo handleChange={this.handleChange} />
          <Experience handleChange={this.handleChange} />
          <button type="button">Add</button>
          <Education handleChange={this.handleChange} />
          <button type="button">Add</button>
        </form>
        <div className="finished-container">
          <CompletedForm
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phone={this.state.phone}
            address={this.state.address}
            about={this.state.about}
          />
        </div>
      </div>
    );
  }
}

export default App;
