import React, { Component } from 'react';
import bb from '../images/bb-back.png'
import '../styling/results.css'

class Results extends Component {
  render() {
    return (
        <div className="container-fluid">
            <h1>{this.props.fieldValues.name}, Big Brother is </h1>
            <img src={bb} className="img-fluid" alt="logo" />
        </div>
    );
  }
}

export default Results;
