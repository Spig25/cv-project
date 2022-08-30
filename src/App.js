import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import CompletedExperience from "./components/CompletedExperience";
import CompletedForm from "./components/CompletedForm";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";
import "./styles/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numExperience: 1,
      numEducation: 1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
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

  addExperience = () => {
    this.setState({ numExperience: this.state.numExperience + 1 });
  };
  addEducation = () => {
    this.setState({ numEducation: this.state.numEducation + 1 });
  };

  render() {
    const experience = [];
    const completedExperience = [];
    for (let i = 0; i < this.state.numExperience; i++) {
      experience.push(<Experience handleChange={this.handleChange} key={i} />);
      completedExperience.push(
        <CompletedExperience
          experienceTitle={this.state.experienceTitle5}
          experienceCompany={this.state.experienceCompany}
          key={i}
        />
      );
    }

    const education = [];
    for (let i = 0; i < this.state.numEducation; i++) {
      education.push(<Education handleChange={this.handleChange} key={i} />);
    }

    return (
      <div className="App">
        <form className="input-container">
          <GeneralInfo handleChange={this.handleChange} />
          <div className="experience-container">{experience}</div>
          <button type="button" onClick={this.addExperience}>
            Add
          </button>
          <div className="education-container">{education}</div>
          <button type="button" onClick={this.addEducation}>
            Add
          </button>
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
          {completedExperience}
        </div>
      </div>
    );
  }
}

export default App;
