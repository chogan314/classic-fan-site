import React, { Component } from 'react';

class MobileMenu extends Component {
    render() {
        return(
            <div id="mobile-menu-section">
                <div className="section-wrapper">
                    <div className="mobile-menu">
                        <div className="mobile-menu-container">
                            <div className="mobile-menu-item noselect"><a href="index">Home</a></div>
                            <div className="mobile-menu-item noselect"><a href="index">News</a></div>
                            <div className="mobile-menu-item noselect"><a href="index">Articles</a></div>
                            <div className="mobile-menu-item noselect"><a href="index">Guides</a></div>
                            <div className="mobile-menu-item noselect"><a href="index">Tools</a></div>
                        </div>
                        <div className="mobile-links-container">
                            <div className="mobile-links-item noselect"><a href="index">Contact</a></div>
                            <div className="mobile-links-item noselect"><a href="index">Write for Us</a></div>
                            <div className="mobile-links-item noselect"><a href="index">Login</a></div>
                            <div className="mobile-links-item noselect"><a href="index">Register</a></div>
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