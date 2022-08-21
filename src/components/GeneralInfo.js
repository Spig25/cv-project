import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: ``,
      lastName: ``,
      email: ``,
      phone: ``,
      address: ``,
      about: ``,
    };

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
      <div className="general-info">
        <input
          type="text"
          className="general-input"
          id="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          className="general-input"
          id="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          className="general-input"
          id="email"
          placeholder="Email"
          onChange={this.handleChange}
        />
        <input
          type="text"
          className="general-input"
          id="phone"
          placeholder="Phone Number"
          onChange={this.handleChange}
        />
        <input
          type="text"
          className="general-input"
          id="address"
          placeholder="Address"
          onChange={this.handleChange}
        />
        <input
          type="text"
          className="general-input about-me"
          id="about"
          placeholder="About Me"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default GeneralInfo;
