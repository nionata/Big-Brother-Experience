import React, { Component } from 'react';
import bb from '../images/bb-front.png';
import '../styling/home.css';

class Home extends Component {
  saveAndContinue(e) {
      e.preventDefault()

      if(this.refs.inputName.value !== "") {
        var data = {
            name: this.refs.inputName.value
        }

        this.props.saveValues(data)
        this.props.nextStep()
      }
  }

  render() {
    return (
      <div className="container-fluid" id="main">
        <img src={bb} className="img-fluid" alt="logo" />
        <h2>Welcome to Big Brother Experience</h2>
        <p>
          To get started, enter your name below.
        </p>
        <input type="text" ref="inputName" className="form-inline" defaultValue={this.props.fieldValues.name} placeholder="Winston Smith" />
        <button className="btn btn-primary" onClick={this.saveAndContinue.bind(this)}>Next</button>
      </div>
    );
  }
}

export default Home;
