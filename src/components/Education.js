import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <form className="education">
        <input
          type="text"
          className="education-input"
          placeholder="Institution Name"
        />
        <input type="text" className="education-input" placeholder="Location" />
        <input type="text" className="education-input" placeholder="Degree" />
        <input type="text" className="education-input" placeholder="From" />
        <input type="text" className="education-input" placeholder="To" />
        <button type="button">Delete</button>
      </form>
    );
  }
}

export default Education;
