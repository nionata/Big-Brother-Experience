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
        if(this.refs.inputName.value == "admin") {
            var data = {
                name: this.refs.inputName.value
            }

            this.props.saveValues(data)
            this.props.nextStep()

            return
        }

        var num = 1

        document.getElementById("home").className += " fade-out"

        window.scrollTo(0, 0)

        document.getElementById("prompt-1").className = "fade-in"

        var intervalNum = setInterval(function() {
            document.getElementById("prompt-" + num).className = "fade-out"
            num++
            document.getElementById("prompt-" + num).className = "fade-in"

            if(num == 5) {
                clearInterval(intervalNum)
            }
        }.bind(this), 3500)

        setTimeout(function() {
            var data = {
                name: this.refs.inputName.value
            }

            this.props.saveValues(data)
            this.props.nextStep()
        }.bind(this), 17500)
      } else {
         this.setState({
            error: true
         })
      }
  }

  checkField(e) {
      e.preventDefault

      if(this.refs.inputName.value !== "") {
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
      <span>
        <div id="prompt">
            <h2 id="prompt-1" className="fade-out">You are walking in the prole section and discover a shop with some books...</h2>
            <h2 id="prompt-2" className="fade-out">After asking about life before the war, the shop keeper says...</h2>
            <h2 id="prompt-3" className="fade-out">"Why don't you come and take an old test I have from before the war?"...</h2>
            <h2 id="prompt-4" className="fade-out">You agree and follow the shop keeper to a back room...</h2>
            <h2 id="prompt-5" className="fade-out">Good luck!</h2>
        </div>
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
            <input type="text" ref="inputName" className="form-inline" defaultValue={this.props.fieldValues.name} onChange={this.checkField.bind(this)}     placeholder="Winston Smith" />
            <button className="btn btn-primary" onClick={this.saveAndContinue.bind(this)}>Next</button>
        </div>

      </span>
    )
  }
}

export default Home;
