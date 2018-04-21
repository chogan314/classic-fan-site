import React, { Component } from 'react';

class Links extends Component {
    render() {
        return(
            <div id="links-section">
                <div className="section-wrapper">
                    <div id="links-container">
                        <div className="links-item noselect">Contact</div>
                        <div className="links-item noselect">Write for Us</div>
                        <div className="links-item noselect">Login</div>
                        <div className="links-item noselect">Register</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Links;