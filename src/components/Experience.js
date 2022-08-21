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
        />
        <input type="text" className="experience-input" placeholder="Company" />
        <input
          type="text"
          className="experience-input"
          placeholder="Location"
        />
        <input type="text" className="experience-input" placeholder="From" />
        <input type="text" className="experience-input" placeholder="To" />
        <button type="button" onClick={this.deleteSection}>
          Delete
        </button>
      </div>
    );
  }
}

export default Experience;
