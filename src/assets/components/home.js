import React, { Component } from 'react';
import bb from '../images/bb-front.png';
import '../styling/home.css';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid" id="main">
        <img src={bb} className="img-fluid" alt="logo" />
        <h2>Welcome to Big Brother Experience</h2>
        <p>
          To get started, enter your name below.
        </p>
        <input type="text" ref="inputName" className="form-inline" placeholder="Winston Smith"/>
        <button className="btn btn-primary">Next</button>
      </div>
    );
  }
}

export default Home;
