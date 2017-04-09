import React, { Component } from 'react';
import bb from '../images/bb-head.png';
import '../styling/home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <img src={bb} className="home-logo" alt="logo" />
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
