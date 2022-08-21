import React, { Component } from "react";
import { v4 as uuidV4 } from "uuid";

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
          id={`education-${uuidV4()}`}
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          className="education-input"
          placeholder="Location"
          id={`education-${uuidV4()}`}
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          className="education-input"
          placeholder="Degree"
          id={`education-${uuidV4()}`}
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          className="education-input"
          placeholder="From"
          id={`education-${uuidV4()}`}
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          className="education-input"
          placeholder="To"
          id={`education-${uuidV4()}`}
          onChange={this.props.handleChange}
        />
        <button type="button">Delete</button>
      </form>
    );
  }
}

export default Education;
