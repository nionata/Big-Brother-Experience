import React, { Component } from 'react';
import '../styling/questions.css';
import questions from '../questions.json';

var numberOfQuestions = 10
var selectedQuestions = {}

class Questions extends Component {
  constructor(props) {
      super(props)

      this.state = {
          question: 0
      }
  }

  componentWillMount() {
      if(this.props.fieldValues["1"] == null) {
          var questionBankNumber = Object.keys(questions).length - 1
          var used = []

          for(var i = 0; i < numberOfQuestions; i++) {
            var questionNumber = Math.floor(Math.random() * (questionBankNumber + 1))

            while(used.indexOf(questionNumber) != - 1) {
                questionNumber = Math.floor(Math.random() * (questionBankNumber + 1))
            }

            used.push(questionNumber)
            selectedQuestions[i] = questions[questionNumber]
          }
      } else {
          //console.log(selectedQuestions)
          for(i = 0; i < numberOfQuestions; i++) {
            //Reload selectedquestion
          }
      }
  }

  renderQuestion() {
      var question = selectedQuestions[this.state.question]

      return (
        <span>
            <h2>{question.question}</h2>
            <hr/>
            <div id="question-choices">
                <label class="radio-inline">
                    <input type="radio" name="choice" id="0" value="0" /> {selectedQuestions[this.state.question].choices[0]}
                </label>
                <label class="radio-inline">
                    <input type="radio" name="choice" id="1" value="1" /> {selectedQuestions[this.state.question].choices[1]}
                </label>
                <label class="radio-inline">
                    <input type="radio" name="choice" id="2" value="2" /> {selectedQuestions[this.state.question].choices[2]}
                </label>
                <label class="radio-inline">
                    <input type="radio" name="choice" id="3" value="3" /> {selectedQuestions[this.state.question].choices[3]}
                </label>
            </div>
            <hr/>
        </span>
      )
  }

  renderButtons() {
      var previousFunc = null
      var nextFunc = null

      if(this.state.question === 0) {
          if(numberOfQuestions === 1) {
            previousFunc = this.saveAndPrevious.bind(this)
            nextFunc = this.saveAndContinue.bind(this)
          } else {
            previousFunc = this.saveAndPrevious.bind(this)
            nextFunc = this.nextQuestion.bind(this)
          }
      } else if(this.state.question === (numberOfQuestions - 1)) {
          previousFunc = this.previousQuestion.bind(this)
          nextFunc = this.saveAndContinue.bind(this)
      } else {
          previousFunc = this.previousQuestion.bind(this)
          nextFunc = this.nextQuestion.bind(this)
      }

      return (
          <span>
                <button className="btn btn-default pull-left" onClick={previousFunc}>Previous</button>
                <button className="btn btn-default pull-right" onClick={nextFunc}>Next</button>
          </span>
      )
  }

  //On every question except the first
  previousQuestion() {
      this.setState({
          question: this.state.question - 1
      })
  }

  //On every question except the last
  nextQuestion() {
      if(1 == 1) {
        this.setState({
          question: this.state.question + 1
        })
      }
  }

  //Only on first question
  saveAndPrevious(e) {
      e.preventDefault()

      this.props.saveValues(selectedQuestions)
      this.props.previousStep()
  }

  //Only on the last question
  saveAndContinue(e) {
      e.preventDefault()

      if(1 === 1) {
        this.props.saveValues(selectedQuestions)
        this.props.nextStep()
      }
  }

  render() {
    var question = this.state.question + 1

    var style = {
      width: ((question / numberOfQuestions) * 100) + '%'
    }

    return (
        <div className="container-fluid">
            <div className="progress" style={style}></div>
            <h1>Big Brother has a few questions for you {this.props.fieldValues.name}</h1>
            <div id="question-group">
                <div id="question-number">
                    <h1>{this.state.question + 1}</h1>
                </div>
                {this.renderQuestion()}
                {this.renderButtons()}
            </div>
        </div>
    );
  }
}

export default Questions;
