import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Menu extends Component {
    render() {
        return(
            <div id="menu-section">
                <div className="section-wrapper">
                    <div className="menu-container">
                        <Link to='/'><div className={"menu-item noselect" + (this.props.active === "home" ? " active-menu-item" : "")}>Home</div></Link>
                        <Link to='/'><div className={"menu-item noselect" + (this.props.active === "news" ? " active-menu-item" : "")}>News</div></Link>
                        <Link to='/'><div className={"menu-item noselect" + (this.props.active === "articles" ? " active-menu-item" : "")}>Articles</div></Link>
                        <Link to='/guides'><div className={"menu-item noselect" + (this.props.active === "guides" ? " active-menu-item" : "")}>Guides</div></Link>
                        <Link to='/'><div className={"menu-item noselect" + (this.props.active === "tools" ? " active-menu-item" : "")}>Tools</div></Link>
                        <div className="menu-hamburger-icon"></div>
                        <div className="menu-close-icon"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;