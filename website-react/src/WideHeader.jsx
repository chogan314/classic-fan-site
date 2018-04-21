import React, { Component } from 'react';

class WideHeader extends Component {
    render() {
        return(
            <div id="wide-header-section">
                <div className="lhs-section-wrapper">
                    <div id="wide-links-section">
                        <div id="wide-links-container">
                            <div className="wide-links-item noselect">Contact</div>
                            <div className="wide-links-item noselect">Write for Us</div>
                            <div className="wide-links-item noselect">Login</div>
                            <div className="wide-links-item noselect">Register</div>
                        </div>
                    </div>
                    <div id="wide-header-scrolling-section">
                        <div id="wide-title-container">
                            <div>SENTINEL</div>
                            <div>HILL</div>
                        </div>
                        <div id="wide-menu-container">
                            <div className="wide-menu-item noselect">Home</div>
                            <div className="wide-menu-item noselect">News</div>
                            <div className="wide-menu-item noselect">Articles</div>
                            <div className="wide-menu-item noselect">Guides</div>
                            <div className="wide-menu-item noselect">Tools</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WideHeader;