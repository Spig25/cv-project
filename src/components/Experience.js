import React, { Component } from "react";

class Experience extends Component {
  constructor() {
    super();

    this.state = {};
  }

  deleteSection = (e) => {};

  render() {
    return (
      <div className="experience">
        <input
          type="text"
          className="experience-input"
          placeholder="Job Title"
          id="experienceTitle"
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          className="experience-input"
          placeholder="Company"
          id="experienceCompany"
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          className="experience-input"
          placeholder="Location"
          id="experienceLocation"
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          className="experience-input"
          placeholder="From"
          id="experienceFrom"
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          className="experience-input"
          placeholder="To"
          id="experienceTo"
          onChange={this.props.handleChange}
        />
        <button type="button" onClick={this.deleteSection}>
          Delete
        </button>
      </div>
    );
  }
}

export default Experience;
