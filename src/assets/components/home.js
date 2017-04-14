import React, { Component } from 'react';
import BBFront from '../images/bb-front.png';
import '../styling/home.css';

class Home extends Component {
  constructor(props) {
      super(props)

      this.state = {
          error: false
      }
  }

  saveAndContinue(e) {
      e.preventDefault()

      if(this.refs.inputName.value !== "") {
        var data = {
            name: this.refs.inputName.value
        }

        this.props.saveValues(data)
        this.props.nextStep()

        this.setState({
            error: false
        })
      } else {
         this.setState({
            error: true
        })
      }
  }

  render() {
    return (
      <div className="container-fluid" id="home">
        <img src={BBFront} className="img-fluid" alt="logo" />
        <h2>Welcome to Big Brother Experience</h2>
        <p>
          To get started, enter your name below.
        </p>
        {
            this.state.error ? (
                <h3 id="error">You must enter a name to move on!</h3>
            ) : (null)
        }
        <input type="text" ref="inputName" className="form-inline" defaultValue={this.props.fieldValues.name} placeholder="Winston Smith" />
        <button className="btn btn-primary" onClick={this.saveAndContinue.bind(this)}>Next</button>
      </div>
    );
  }
}

export default Home;
