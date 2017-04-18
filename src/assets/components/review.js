import React, { Component } from 'react';
import '../styling/review.css'

class Review extends Component {
    render() {

        var fieldValues = []

        for(var i = 0; i < Object.keys(this.props.fieldValues).length - 2; i++) {
            fieldValues.push(this.props.fieldValues[i])
        }

        return (
            <table className="table" id="review">
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

                            item.answer.map(function(item2, index2) {
                                if(item2 == item.selected) {
                                    color = "#31dd8a"
                                } else {
                                    color = "#ee3b3b"
                                }
                            })

                            var style = {
                                backgroundColor: color
                            }

                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.question}</td>
                                    <td>
                                        {
                                            item.answer.map(function(item2, index2) {
                                                return (
                                                    <span key={index2}>
                                                        {item.choices[item2]}
                                                        <br/>
                                                    </span>
                                                )
                                            })
                                        }
                                    </td>
                                    <td style={style}>{item.choices[item.selected]}</td>
                                </tr>
                            )
                        })}
                    </tbody>
            </table>
        )
    }
}

export default Review;
