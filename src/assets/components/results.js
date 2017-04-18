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
    var msg = ""
    var grade = this.gradeQuestions(this.props.fieldValues)

    if(grade >= 80) {
        msg = ", Big Brother has determined that your answers suggest that your independent thinking and intelligence are a threat. Off to Room 101. Your biggest fear...the AP Test. Luckily you got a " + grade + "% so you will be fine!"
    } else if(grade >= 60) {
        msg = ", Big Brother has determined that your answers suggest that your knowledge and hints of rebellious thoughts are mildly suspicious. Telescreens will be keeping an extra close watch over you. With a " + grade + "% you are getting close to becoming a threat!"
    } else {
        msg = ", Big Brother has determined that your answers reflect your devotion to Big Brother, ability to doublethink, and embodiment of a loyal Party member. Make sure you don't improve that " + grade + "% or Big Brother might question your loyalty!"
    }

    return (
        <div className="container-fluid" id="results">
            <p>{this.props.fieldValues.name}{msg}</p>
            <button className="btn btn-default" onClick={this.handleOnReview.bind(this)}>Review Test</button>
            <button className="btn btn-default" onClick={this.props.anotherOne}>Another One</button>
            {this.state.isReviewing ? <Review fieldValues={this.props.fieldValues} /> : null}
        </div>
    );
  }
}

export default Results;
