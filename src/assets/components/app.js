import React, { Component } from 'react';
import '../styling/app.css';
import Home from './home';
import One from './choiceOne';
import Two from './choiceTwo';
import Three from './choiceThree';
import Four from './choiceFour';
import Five from './choiceFive';
import Results from './results';

var fieldValues = {
    name: null,
    choiceOne: null,
    choiceTwo: null,
    choiceThree: null,
    choiceFour: null,
    choiceFive: null
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
      console.log(fieldValues)
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
            return <One fieldValues={fieldValues}
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        saveValues={this.saveValues}/>
        case 2:
            return <Two fieldValues={fieldValues}
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        saveValues={this.saveValues}/>
        case 3:
            return <Three fieldValues={fieldValues}
                          nextStep={this.nextStep}
                          previousStep={this.previousStep}
                          saveValues={this.saveValues}/>
        case 4:
            return <Four fieldValues={fieldValues}
                         nextStep={this.nextStep}
                         previousStep={this.previousStep}
                         saveValues={this.saveValues}/>
        case 5:
            return <Five fieldValues={fieldValues}
                         nextStep={this.nextStep}
                         previousStep={this.previousStep}
                         saveValues={this.saveValues}/>
        case 6:
            return <Results fieldValues={fieldValues}/>
      }
  }

  render() {
    var step = this.state.step

    if(step == 6) {
        step = 0
    }

    var style = {
      width: (step / 5 * 100) + '%'
    }

    return (
        <span>
            <div className="progress" style={style}></div>
            {this.showStep()}
        </span>
    )
  }
}

export default App;
