import React, { Component } from 'react';

class FixedMenu extends Component {
    render() {
        return(
            <div id="fixed-menu-section">
                <div className="section-wrapper">
                    <div className="menu-container">
                        <div className="menu-item noselect">Home</div>
                        <div className="menu-item noselect">News</div>
                        <div className="menu-item noselect">Articles</div>
                        <div className="menu-item noselect">Guides</div>
                        <div className="menu-item noselect">Tools</div>
                        <div className="menu-hamburger-icon"></div>
                        <div className="menu-close-icon"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FixedMenu;