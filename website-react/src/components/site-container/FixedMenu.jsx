import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class FixedMenu extends Component {
    render() {
        return(
            <div id="fixed-menu-section">
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

function onScroll(event) {
    var menu = document.getElementById("menu-section");
    var fixedMenu = document.getElementById("fixed-menu-section");

    if (window.innerWidth >= 1440) {
        fixedMenu.style.display = "none";
        return;
    }

    if (menu.getBoundingClientRect().top <= 0) {
        fixedMenu.style.display = "block";
        menu.style.visibility = "hidden";
    } else {
        fixedMenu.style.display = "none";
        menu.style.visibility = "visible";
    }
}

function onResize(event) {
    onScroll(event);
}

window.addEventListener("scroll", onScroll);
window.addEventListener("resize", onResize);

export default FixedMenu;