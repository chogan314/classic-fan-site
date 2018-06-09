import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class FixedMenu extends Component {
    render() {
        return(
            <div id="fixed-menu-section">
                <div className="section-wrapper">
                    <div className="menu-container">
                        <Link to='/'><div className={"menu-item noselect" + (this.props.active === "home" ? " active-menu-item" : "")}>Home</div></Link>
                        <Link to='/news'><div className={"menu-item noselect" + (this.props.active === "news" ? " active-menu-item" : "")}>News</div></Link>
                        <Link to='/articles'><div className={"menu-item noselect" + (this.props.active === "articles" ? " active-menu-item" : "")}>Articles</div></Link>
                        <Link to='/guides'><div className={"menu-item noselect" + (this.props.active === "guides" ? " active-menu-item" : "")}>Guides</div></Link>
                        <Link to='/'><div className={"menu-item noselect" + (this.props.active === "tools" ? " active-menu-item" : "")}>Tools</div></Link>
                        <div className="mobile-menu-icon menu-open-icon" onClick={onMenuIconClick}></div>
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

window.menuOpen = false;
window.mainScroll = 0;
window.menuScroll = 0;

function openMobileMenu() {
    window.menuOpen = true;
    window.mainScroll = window.scrollY;

    document.getElementById("main-content").style.display = "none";
    document.getElementById("mobile-menu-section").style.display = "block";
    if (document.getElementById("fixed-menu-section").style.display === "block") {
        document.getElementById("title-section").style.display = "none";
    }

    Array.from(document.getElementsByClassName("mobile-menu-icon")).forEach(function(element) {
        element.classList.add("menu-close-icon");
        element.classList.remove("menu-open-icon");
    });

    window.scrollTo(0, window.menuScroll);
}

function closeMobileMenu() {
    window.menuOpen = false;
    window.menuScroll = window.scrollY;

    document.getElementById("main-content").style.display = "flex";
    document.getElementById("mobile-menu-section").style.display = "none";
    document.getElementById("title-section").style.display = "block";

    Array.from(document.getElementsByClassName("mobile-menu-icon")).forEach(function(element) {
        element.classList.remove("menu-close-icon");
        element.classList.add("menu-open-icon");
    });

    window.scrollTo(0, window.mainScroll);
}

function onMenuIconClick() {
    if (!window.menuOpen) {
        openMobileMenu();
    } else {
        closeMobileMenu();
    }
}

window.addEventListener("scroll", onScroll);
window.addEventListener("resize", onResize);

export default FixedMenu;