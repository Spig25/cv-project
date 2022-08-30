import React, { Component } from "react";

export class CompletedExperience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div>{this.props.experienceTitle}</div>
        <div>{this.props.experienceCompany}</div>
        <div>{this.props.experienceLocation}</div>
        <div>{this.props.experienceFrom}</div>
        <div>{this.props.experienceTo}</div>
      </>
    );
  }
}

export default CompletedExperience;
