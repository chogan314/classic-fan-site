import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MobileMenu extends Component {
    render() {
        return(
            <div id="mobile-menu-section">
                <div className="section-wrapper">
                    <div className="mobile-menu">
                        <div className="mobile-menu-container">
                            <div className={"mobile-menu-item noselect" + (this.props.active === "home" ? " active-menu-item" : "")}><Link to='/'>Home</Link></div>
                            <div className={"mobile-menu-item noselect" + (this.props.active === "news" ? " active-menu-item" : "")}><Link to='/'>News</Link></div>
                            <div className={"mobile-menu-item noselect" + (this.props.active === "articles" ? " active-menu-item" : "")}><Link to='/'>Articles</Link></div>
                            <div className={"mobile-menu-item noselect" + (this.props.active === "guides" ? " active-menu-item" : "")}><Link to='/guides'>Guides</Link></div>
                            <div className={"mobile-menu-item noselect" + (this.props.active === "tools" ? " active-menu-item" : "")}><Link to='/'>Tools</Link></div>
                        </div>
                        <div className="mobile-links-container">
                            <div className="mobile-links-item noselect"><Link to='/'>Contact</Link></div>
                            <div className="mobile-links-item noselect"><Link to='/'>Write for Us</Link></div>
                            <div className="mobile-links-item noselect"><Link to='/'>Login</Link></div>
                            <div className="mobile-links-item noselect"><Link to='/'>Register</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

var menuOpen = false;
var mainScroll = 0;
var menuScroll = 0;

document.addEventListener("DOMContentLoaded", function() {
    var menu = document.getElementById("menu-section");

    Array.from(document.getElementsByClassName("menu-hamburger-icon")).forEach(function(element) {
        element.onclick = function() {
            menuOpen = true;
            mainScroll = window.scrollY;
            if (mainScroll < menu.offsetTop) {
                if (menuScroll <= menu.offsetTop) {
                    menuScroll = mainScroll;
                }
            } else {
                if (menuScroll < menu.offsetTop) {
                    menuScroll = menu.offsetTop;
                }
            }

            document.getElementById("grid-section").style.display = "none";
            document.getElementById("mobile-menu-section").style.display = "block";
            Array.from(document.getElementsByClassName("menu-hamburger-icon")).forEach(function(element) {
                element.style.display = "none";
            });
            Array.from(document.getElementsByClassName("menu-close-icon")).forEach(function(element) {
                element.style.display = "block";
            });
            window.scrollTo(0, menuScroll);

            if (window.scrollY === 0) {
                if (mainScroll >= menu.offsetTop) {
                    document.getElementById("title-section").style.display = "none";
                }
            }
        };
    });

    Array.from(document.getElementsByClassName("menu-close-icon")).forEach(function(element) {
        element.onclick = function() {
            menuOpen = false;
            menuScroll = window.scrollY;
            if (menuScroll < menu.offsetTop) {
                if (mainScroll <= menu.offsetTop) {
                    mainScroll = menuScroll;
                }
            } else {
                if (mainScroll < menu.offsetTop) {
                    mainScroll = menu.offsetTop;
                }
            }

            document.getElementById("title-section").style.display = "block";
            document.getElementById("grid-section").style.display = "block";
            document.getElementById("mobile-menu-section").style.display = "none";
            Array.from(document.getElementsByClassName("menu-hamburger-icon")).forEach(function(element) {
                element.style.display = "block";
            });
            Array.from(document.getElementsByClassName("menu-close-icon")).forEach(function(element) {
                element.style.display = "none";
            });
            window.scrollTo(0, mainScroll);
        };
    });
}, false);

function onResize(event) {
    if (window.innerWidth > 640 && window.innerWidth < 1440) {
        menuOpen = false;
        document.getElementById("title-section").style.display = "block";
        document.getElementById("grid-section").style.display = "block";
        document.getElementById("mobile-menu-section").style.display = "none";
        Array.from(document.getElementsByClassName("menu-hamburger-icon")).forEach(function (element) {
            element.style.display = "none";
        });
        Array.from(document.getElementsByClassName("menu-close-icon")).forEach(function (element) {
            element.style.display = "none";
        });
    } else if (window.innerWidth <= 640 && !menuOpen) {
        Array.from(document.getElementsByClassName("menu-hamburger-icon")).forEach(function (element) {
            element.style.display = "block";
        });
    } else if (window.innerWidth >= 1440) {
        document.getElementById("title-section").style.display = "none";
    }
}

window.addEventListener("resize", onResize);

export default MobileMenu;