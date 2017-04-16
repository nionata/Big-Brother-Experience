import React, { Component } from 'react';
import '../styling/results.css'

class Results extends Component {
  gradeQuestions(values) {
    var grade = 0

    for(var i = 0; i < Object.keys(values).length - 1; i++) {
        if(values[i] != null) {
            var answers = values[i].answer

            for(var i2 = 0; i2 < answers.length; i2++) {
                if(answers[i2] == values[i].selected) {
                    grade += 1
                }
            }
        }
    }

    grade /= (Object.keys(values).length - 1)
    grade *= 100

    return grade
  }

  render() {
    var fieldValues = []

    for(var i = 0; i < Object.keys(this.props.fieldValues).length - 1; i++) {
        fieldValues.push(this.props.fieldValues[i])
    }

    return (
        <div className="container-fluid">
            <h1>{this.props.fieldValues.name}, Big Brother graded your test and you got a {this.gradeQuestions(this.props.fieldValues)}%</h1>
            <table className="table">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Question</th>
                            <th>Answer</th>
                            <th>Your Choice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fieldValues.map(function(item, index) {
                            var color = ""

                            if(item.choices[item.answer[0]] == item.choices[item.selected]) {
                                color = "#31dd8a"
                            } else {
                                color = "#ee3b3b"
                            }

                            var style = {
                                backgroundColor: color
                            }
                            return (
                                <tr key={index} style={style}>
                                    <td>{index + 1}</td>
                                    <td>{item.question}</td>
                                    <td>
                                        {
                                            item.answer.map(function(item2, index2) {
                                                return (
                                                    item.choices[item2]
                                                )
                                            })
                                        }
                                    </td>
                                    <td>{item.choices[item.selected]}</td>
                                </tr>
                            )
                        })}
                    </tbody>
            </table>
        </div>
    );
  }
}

export default Results;
