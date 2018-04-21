import React, { Component } from 'react';

class MobileMenu extends Component {
    render() {
        return(
            <div id="mobile-menu-section">
                <div className="section-wrapper">
                    <div className="mobile-menu">
                        <div className="mobile-menu-container">
                            <div className="mobile-menu-item noselect">Home</div>
                            <div className="mobile-menu-item noselect">News</div>
                            <div className="mobile-menu-item noselect">Articles</div>
                            <div className="mobile-menu-item noselect">Guides</div>
                            <div className="mobile-menu-item noselect">Tools</div>
                        </div>
                        <div className="mobile-links-container">
                            <div className="mobile-links-item noselect">Contact</div>
                            <div className="mobile-links-item noselect">Write for Us</div>
                            <div className="mobile-links-item noselect">Login</div>
                            <div className="mobile-links-item noselect">Register</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MobileMenu;