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
                            <div className={"mobile-menu-item noselect" + (this.props.active === "news" ? " active-menu-item" : "")}><Link to='/news'>News</Link></div>
                            <div className={"mobile-menu-item noselect" + (this.props.active === "articles" ? " active-menu-item" : "")}><Link to='/articles'>Articles</Link></div>
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

function openMobileMenu() {
    menuOpen = true;
    mainScroll = window.scrollY;

    document.getElementById("main-content").style.display = "none";
    document.getElementById("mobile-menu-section").style.display = "block";
    if (document.getElementById("fixed-menu-section").style.display === "block") {
        document.getElementById("title-section").style.display = "none";
    }

    Array.from(document.getElementsByClassName("mobile-menu-icon")).forEach(function(element) {
        element.classList.add("menu-close-icon");
        element.classList.remove("menu-open-icon");
    });

    window.scrollTo(0, menuScroll);
}

function closeMobileMenu() {
    menuOpen = false;
    menuScroll = window.scrollY;

    document.getElementById("main-content").style.display = "flex";
    document.getElementById("mobile-menu-section").style.display = "none";
    document.getElementById("title-section").style.display = "block";

    Array.from(document.getElementsByClassName("mobile-menu-icon")).forEach(function(element) {
        element.classList.remove("menu-close-icon");
        element.classList.add("menu-open-icon");
    });

    window.scrollTo(0, mainScroll);
}

function onResize(event) {
    if (window.innerWidth > 640 && menuOpen) {
        closeMobileMenu();
    }
    else if (window.innerWidth >= 1440) {
        document.getElementById("title-section").style.display = "none";
    } else if (!menuOpen) {
        document.getElementById("title-section").style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    Array.from(document.getElementsByClassName("mobile-menu-icon")).forEach(function(element) {
        element.onclick = function() {
            if (!menuOpen) {
                openMobileMenu();
            } else {
                closeMobileMenu();
            }
        }
    });
}, false);

window.addEventListener("resize", onResize);

export default MobileMenu;