import React, { Component } from 'react';
import '../styling/choice.css'

class choiceFive extends Component {
  saveAndContinue(e) {
      e.preventDefault()

      if(1 == 1) {
        var data = {
            choiceFive: null
        }

        this.props.saveValues(data)
        this.props.nextStep()
      }
  }

  render() {
    return (
        <div className="container-fluid">
            <h1>I have a question for you {this.props.fieldValues.name}</h1>
            <button className="btn btn-primary" onClick={this.props.previousStep}>Previous</button>
            <button className="btn btn-primary" onClick={this.saveAndContinue.bind(this)}>Next</button>
        </div>
    );
  }
}

export default choiceFive;
