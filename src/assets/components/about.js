import React, { Component } from 'react';
import '../styling/about.css'
import nick from '../images/nick.png'
import natalie from '../images/natalie.jpg'

class About extends Component {
  render() {
    return (
        <div className="container-fluid" id="about">
          <h1>Background</h1>
          <p>Big Brother Experience is an interactive literature quiz themed around the all knowing 'Big Brother' from 1984.</p>
          <hr />
          <h1>This is the brain child of:</h1>
          <div className="row">
            <div className="col-md-6">
                <img src={nick} alt="nick" className="img-responsive" />
                <div className="img-subtitle">
                    <h3>Nicholas Ionata</h3>
                    <h4>Technology Enthusiast</h4>
                </div>
            </div>
            <div className="col-md-6">
                <img src={natalie} alt="nick" className="img-responsive" />
                <div className="img-subtitle">
                    <h3>Natalie Rincon</h3>
                    <h4>Literature Enthusiast</h4>
                </div>
            </div>
          </div>
        </div>
    );
  }
}

export default About;
