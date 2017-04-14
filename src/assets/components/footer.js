import React, { Component } from 'react';
import '../styling/footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul>
          <li><a href="https://github.com/nionata/Big-Brother-Experience" target="_blank">GitHub</a></li>
          <li><a href="/about">About</a></li>
        <li><a href="/">Home</a></li>
        </ul>
      </div>
    );
  }
}

export default Footer;
