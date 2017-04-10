import React, { Component } from 'react';
import '../styling/app.css';
import Home from './home';
import Questions from './questions';
import Results from './results';

var fieldValues = {
    name: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null
}

class App extends Component {
  constructor(props) {
      super(props)
      this.nextStep = this.nextStep.bind(this)
      this.previousStep = this.previousStep.bind(this)

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
            return <Results fieldValues={fieldValues}/>
      }
  }

  render() {
    /*var step = this.state.step

    var style = {
      width: (step / 5 * 100) + '%'

      <div className="progress" style={style}></div>
    }*/

    return (
        <span>
            {this.showStep()}
        </span>
    )
  }
}

export default App;
