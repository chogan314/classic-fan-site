import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MobileMenu extends Component {
    render() {
        return(
            <div id="mobile-menu-section">
                <div className="section-wrapper">
                    <div className="mobile-menu">
                        <div className="mobile-menu-container">
                            <div className={"mobile-menu-item noselect" + (this.props.active === "home" ? " active-menu-item" : "")}><Link to='/' onClick={closeMobileMenu}>Home</Link></div>
                            <div className={"mobile-menu-item noselect" + (this.props.active === "news" ? " active-menu-item" : "")}><Link to='/news' onClick={closeMobileMenu}>News</Link></div>
                            <div className={"mobile-menu-item noselect" + (this.props.active === "articles" ? " active-menu-item" : "")}><Link to='/articles' onClick={closeMobileMenu}>Articles</Link></div>
                            <div className={"mobile-menu-item noselect" + (this.props.active === "guides" ? " active-menu-item" : "")}><Link to='/guides' onClick={closeMobileMenu}>Guides</Link></div>
                            <div className={"mobile-menu-item noselect" + (this.props.active === "tools" ? " active-menu-item" : "")}><Link to='/' onClick={closeMobileMenu}>Tools</Link></div>
                        </div>
                        <div className="mobile-links-container">
                            <div className="mobile-links-item noselect"><Link to='/' onClick={closeMobileMenu}>Contact</Link></div>
                            <div className="mobile-links-item noselect"><Link to='/' onClick={closeMobileMenu}>Write for Us</Link></div>
                            <div className="mobile-links-item noselect"><Link to='/' onClick={closeMobileMenu}>Login</Link></div>
                            <div className="mobile-links-item noselect"><Link to='/' onClick={closeMobileMenu}>Register</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function closeMobileMenu() {
    window.menuOpen = false;

    document.getElementById("main-content").style.display = "flex";
    document.getElementById("mobile-menu-section").style.display = "none";
    document.getElementById("title-section").style.display = "block";

    Array.from(document.getElementsByClassName("mobile-menu-icon")).forEach(function(element) {
        element.classList.remove("menu-close-icon");
        element.classList.add("menu-open-icon");
    });
}

function onResize(event) {
    if (window.innerWidth > 640 && window.menuOpen) {
        closeMobileMenu();
    }
    else if (window.innerWidth >= 1440) {
        document.getElementById("title-section").style.display = "none";
    } else if (!window.menuOpen) {
        document.getElementById("title-section").style.display = "block";
    }
}

function onScroll(event) {
    if (window.innerWidth >= 1440) {
        document.getElementById("title-section").style.display = "none";
    }
}

window.addEventListener("resize", onResize);
window.addEventListener("scroll", onScroll);

export default MobileMenu;