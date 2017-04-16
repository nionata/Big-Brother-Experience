import React, { Component } from 'react';
import '../styling/results.css'

class Results extends Component {
    /*
    renderMember(item, index) {
        if(item.id === this.state.editing) {
            return (
                <tr key={index}>
                    <td><input type="text" ref="inputName" className="form-control" placeholder="Name (ex. John Doe)" defaultValue={item.name}/></td>
                    <td><input type="time" ref="inputAvailTimeStart" className="form-control" defaultValue={item.availTimeStart}/></td>
                    <td><input type="time" ref="inputAvailTimeEnd" className="form-control" defaultValue={item.availTimeEnd}/></td>
                </tr>
            )
        } else {
            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{this.milToStandard(item.availTimeStart)}</td>
                    <td>{this.milToStandard(item.availTimeEnd)}</td>
                    {
                        !this.state.isAddingItem && this.state.editing === null ? (
                            <td>
                                <a href=""><span className="glyphicon glyphicon-pencil small" onClick={this.handleOnEdit} data-id={item.id}></span></a>
                                <a href=""> <span className="glyphicon glyphicon-remove small" onClick={this.deleteMember} data-id={item.id}></span></a>
                            </td>
                        ) : (
                            null
                        )
                    }
                </tr>
            )
        }
    }
    */
  renderQuestions(values) {
      document.createElement("span")
      for(var i = 0; i < Object.keys(values).length - 1; i++) {
          return (
              <tr>
                <td>{i}</td>
                <td>{values[i].question}</td>
                <td>{values[i].answer[0]}</td>
                <td>{values[i].selected}</td>
              </tr>
          )
      }
  }

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
                        {this.renderQuestions(this.props.fieldValues)}
                    </tbody>
            </table>
        </div>
    );
  }
}

export default Results;
