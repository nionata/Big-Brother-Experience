import React, { Component } from 'react';
import '../styling/app.css';
import Home from './home';
import Questions from './questions';
import Results from './results';

var fieldValues = {
    used: []
}

class App extends Component {
  constructor(props) {
      super(props)
      this.nextStep = this.nextStep.bind(this)
      this.previousStep = this.previousStep.bind(this)
      this.anotherOne = this.anotherOne.bind(this)

      this.state = {
          step: 0
      }
  }

  saveValues(fields) {
      fieldValues = Object.assign({}, fieldValues, fields)
  }

  nextStep() {
      this.setState({
          step: this.state.step + 1
      })
  }

  previousStep() {
      this.setState({
          step: this.state.step - 1
      })
  }

  anotherOne() {
      fieldValues = {
          name: fieldValues.name,
          used: fieldValues.used
      }

      console.log(fieldValues)

      this.setState({
          step: 1
      })
  }

  showStep() {
      switch(this.state.step) {
        case 0:
            return <Home fieldValues={fieldValues}
                         nextStep={this.nextStep}
                         saveValues={this.saveValues}/>
        case 1:
            return <Questions fieldValues={fieldValues}
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        saveValues={this.saveValues}/>
        case 2:
            return <Results fieldValues={fieldValues} anotherOne={this.anotherOne}/>
            default:
            return null
      }
  }

  render() {
    return (
        <span>{this.showStep()}</span>
    )
  }
}

export default App;
