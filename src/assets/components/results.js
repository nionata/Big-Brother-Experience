import React, { Component } from 'react';
import '../styling/results.css';
import Review from './review'

class Results extends Component {
  constructor(props) {
      super(props)

      this.state = {
          isReviewing: false
      }
  }

  handleOnReview(e) {
      e.preventDefault()

      this.setState({
          isReviewing: !this.state.isReviewing
      })
  }

  gradeQuestions(values) {
    var grade = 0

    for(var i = 0; i < Object.keys(values).length - 2; i++) {
        if(values[i] != null) {
            var answers = values[i].answer

            for(var i2 = 0; i2 < answers.length; i2++) {
                if(answers[i2] == values[i].selected) {
                    grade += 1
                }
            }
        }
    }

    grade /= (Object.keys(values).length - 2)
    grade *= 100

    return grade
  }

  render() {
    return (
        <div className="container-fluid">
            <h1>
                {this.props.fieldValues.name}, Big Brother graded your test and you got a {this.gradeQuestions(this.props.fieldValues)}%
            </h1>
            <button className="btn btn-default pull-right" onClick={this.props.anotherOne}>Another One</button>
            <button className="btn btn-default pull-left" onClick={this.handleOnReview.bind(this)}>Review Test</button>
            {this.state.isReviewing ? <Review fieldValues={this.props.fieldValues} /> : null}
        </div>
    );
  }
}

export default Results;
