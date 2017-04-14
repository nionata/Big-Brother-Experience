import React from 'react';
import BBBack from '../images/bb-back.png';

class NotFound extends React.Component {
    render() {
        return (
            <div className="container text-center">
                <h1>404.. This page was not found!</h1>
                <a href="/"><img src={BBBack} className="img-fluid" alt="logo" /></a>
                <h2>Not even Big Brother can find what you were searching for!</h2>
            </div>
        )
    }
}

export default NotFound

