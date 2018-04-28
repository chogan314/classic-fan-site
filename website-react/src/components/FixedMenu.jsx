import React, { Component } from 'react';

class FixedMenu extends Component {
    render() {
        return(
            <div id="fixed-menu-section">
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