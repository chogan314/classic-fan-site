import React, { Component } from 'react';

class Links extends Component {
    render() {
        return(
            <div id="links-section">
                <div className="section-wrapper">
                    <div id="links-container">
                        <div className="links-item noselect"><a href="index">Contact</a></div>
                        <div className="links-item noselect"><a href="index">Write for Us</a></div>
                        <div className="links-item noselect"><a href="index">Login</a></div>
                        <div className="links-item noselect"><a href="index">Register</a></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Links;