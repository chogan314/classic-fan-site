import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Menu extends Component {
    render() {
        return(
            <div id="menu-section">
                <div className="section-wrapper">
                    <div className="menu-container">
                        <div className="menu-item noselect"><Link to='/'>Home</Link></div>
                        <div className="menu-item noselect"><Link to='/'>News</Link></div>
                        <div className="menu-item noselect"><Link to='/'>Articles</Link></div>
                        <div className="menu-item noselect"><Link to='/guides'>Guides</Link></div>
                        <div className="menu-item noselect"><Link to='/'>Tools</Link></div>
                        <div className="menu-hamburger-icon"></div>
                        <div className="menu-close-icon"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;