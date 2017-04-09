import React, { Component } from 'react';
import '../styling/app.css';
import Home from './home.js';
import One from './choiceOne';
import Two from './choiceTwo';
import Three from './choiceThree';
import Four from './choiceFour';
import Five from './choiceFive';

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

      this.state = {
          step: 0
      }
  }

  showStep() {
      switch(this.state.step) {
        case 0:
            return <Home />
        case 1:
            return <One />
        case 2:
            return <Two />
        case 3:
            return <Three />
        case 4:
            return <Four />
        case 5:
            return <Five />
      }
  }

  render() {
    return (
        <span>
            {this.showStep()}
        </span>
    )
  }
}

export default App;
