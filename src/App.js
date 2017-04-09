import React, { Component } from 'react';
import bb from './bb-head.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={bb} className="App-logo" alt="logo" />
        <h2>Welcome to Big Brother Experience</h2>
        <p className="App-intro">
          To get started, enter your name below.
        </p>
        <input type="text" ref="inputName" className="form-inline" placeholder="Winston Smith"/>
        <button className="btn btn-primary">Next</button>
      </div>
    );
  }
}

export default App;
