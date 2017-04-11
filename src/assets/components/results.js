import React, { Component } from 'react';
import bb from '../images/bb-back.png'
import '../styling/results.css'

class Results extends Component {
  gradeQuestions(values) {
    var grade = 0

    for(var i = 0; i < Object.keys(values).length - 1; i++) {
        var answers = values[i].answer

        for(var i2 = 0; i2 < answers.length; i2++) {
            if(answers[i2] == values[i].selected) {
                grade += 1
            }
        }
    }

    grade /= (Object.keys(values).length - 1)
    grade *= 100

    return grade
  }

  render() {
    return (
        <div className="container-fluid">
            <h1>{this.props.fieldValues.name}, Big Brother graded your test and you got a {this.gradeQuestions(this.props.fieldValues)}%</h1>
            <img src={bb} className="img-fluid" alt="logo" />
        </div>
    );
  }
}

export default Results;
