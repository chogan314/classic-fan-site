import React, { Component } from 'react';

class WideHeader extends Component {
    render() {
        return(
            <div id="wide-header-section">
                <div className="lhs-section-wrapper">
                    <div id="wide-links-section">
                        <div id="wide-links-container">
                            <div className="wide-links-item noselect"><a href="index">Contact</a></div>
                            <div className="wide-links-item noselect"><a href="index">Write for Us</a></div>
                            <div className="wide-links-item noselect"><a href="index">Login</a></div>
                            <div className="wide-links-item noselect"><a href="index">Register</a></div>
                        </div>
                    </div>
                    <div id="wide-nonscrolling-container">
                        <div className="wide-title-container">
                            <div>SENTINEL</div>
                            <div>HILL</div>
                        </div>
                        <div className="wide-menu-container">
                            <div className="wide-menu-item noselect"><a href="index">Home</a></div>
                            <div className="wide-menu-item noselect"><a href="index">News</a></div>
                            <div className="wide-menu-item noselect"><a href="index">Articles</a></div>
                            <div className="wide-menu-item noselect"><a href="index">Guides</a></div>
                            <div className="wide-menu-item noselect"><a href="index">Tools</a></div>
                        </div>
                    </div>
                    <div id="wide-scrolling-container">
                        <div className="wide-title-container">
                            <div>SENTINEL</div>
                            <div>HILL</div>
                        </div>
                        <div className="wide-menu-container">
                            <div className="wide-menu-item noselect"><a href="index">Home</a></div>
                            <div className="wide-menu-item noselect"><a href="index">News</a></div>
                            <div className="wide-menu-item noselect"><a href="index">Articles</a></div>
                            <div className="wide-menu-item noselect"><a href="index">Guides</a></div>
                            <div className="wide-menu-item noselect"><a href="index">Tools</a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function onScroll(event) {
    var wsc = document.getElementById("wide-scrolling-container");
    var wnc = document.getElementById("wide-nonscrolling-container");

    if (wnc.getBoundingClientRect().top <= 0) {
        wsc.style.display = "block";
        wsc.style.top = "" + (-wnc.offsetHeight - 40 - 56 + (window.pageYOffset || document.documentElement.scrollTop)) + "px"; // ???
        wnc.style.visibility = "hidden";
    } else {
        wsc.style.display = "none";
        wnc.style.visibility = "visible";
    }
}

function onResize(event) {
    onScroll(event);
}

window.addEventListener("scroll", onScroll);
window.addEventListener("resize", onResize);

export default WideHeader;