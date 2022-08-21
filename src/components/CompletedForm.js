import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";

export class CompletedForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>{this.props.firstName}</div>
        <div>{this.props.lastName}</div>
        <div>{this.props.email}</div>
        <div>{this.props.phone}</div>
        <div>{this.props.address}</div>
        <div>{this.props.about}</div>
      </>
    );
  }
}

export default CompletedForm;
