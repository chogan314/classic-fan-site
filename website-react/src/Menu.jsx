import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return(
            <div id="menu-section">
                <div className="section-wrapper">
                    <div className="menu-container">
                        <div className="menu-item noselect"><a href="index">Home</a></div>
                        <div className="menu-item noselect"><a href="index">News</a></div>
                        <div className="menu-item noselect"><a href="index">Articles</a></div>
                        <div className="menu-item noselect"><a href="index">Guides</a></div>
                        <div className="menu-item noselect"><a href="index">Tools</a></div>
                        <div className="menu-hamburger-icon"></div>
                        <div className="menu-close-icon"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;