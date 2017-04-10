import React, { Component } from 'react';
import '../styling/questions.css'

const numberOfQuestions = 10
var data = {
}

class Questions extends Component {
  constructor(props) {
      super(props)

      this.state = {
          question: 0
      }
  }

  renderButtons() {
      if(this.state.question == 0) {
          return (
            <span>
                <button className="btn btn-primary" onClick={this.props.previousStep}>Previous</button>
                <button className="btn btn-primary" onClick={this.nextQuestion.bind(this)}>Next</button>
            </span>
          )
      } else if(this.state.question == (numberOfQuestions -1)) {
          return (
            <span>
                <button className="btn btn-primary" onClick={this.previousQuestion.bind(this)}>Previous</button>
                <button className="btn btn-primary" onClick={this.saveAndContinue.bind(this)}>Next</button>
            </span>
          )
      } else {
          return (
            <span>
                <button className="btn btn-primary" onClick={this.previousQuestion.bind(this)}>Previous</button>
                <button className="btn btn-primary" onClick={this.nextQuestion.bind(this)}>Next</button>
            </span>
          )
      }
  }

  //On every question except the first
  previousQuestion() {
      this.props.saveValues(data)
      this.setState({
          question: this.state.question - 1
      })
  }

  //On every question except the last
  nextQuestion() {
      this.props.saveValues(data)
      this.setState({
          question: this.state.question + 1
      })
  }

  //Only on the last question
  saveAndContinue(e) {
      e.preventDefault()

      if(1 == 1) {
        var data = {
            choiceOne: null
        }

        this.props.saveValues(data)
        this.props.nextStep()
      }
  }

  render() {
    var question = this.state.question + 1

    var style = {
      width: ((question / 10) * 100) + '%'
    }

    return (
        <div className="container-fluid">
            <div className="progress" style={style}></div>
            <h1>Question {this.state.question + 1} for you {this.props.fieldValues.name}</h1>
            {this.renderButtons()}
        </div>
    );
  }
}

export default Questions;
