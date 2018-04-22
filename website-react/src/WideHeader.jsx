import React, { Component } from 'react';

class WideHeader extends Component {
    render() {
        return(
            <div id="wide-header-section">
                <div className="lhs-section-wrapper">
                    <div id="wide-links-section">
                        <div id="wide-links-container">
                            <div className="wide-links-item noselect">Contact</div>
                            <div className="wide-links-item noselect">Write for Us</div>
                            <div className="wide-links-item noselect">Login</div>
                            <div className="wide-links-item noselect">Register</div>
                        </div>
                    </div>
                    <div id="wide-nonscrolling-container">
                        <div className="wide-title-container">
                            <div>SENTINEL</div>
                            <div>HILL</div>
                        </div>
                        <div className="wide-menu-container">
                            <div className="wide-menu-item noselect">Home</div>
                            <div className="wide-menu-item noselect">News</div>
                            <div className="wide-menu-item noselect">Articles</div>
                            <div className="wide-menu-item noselect">Guides</div>
                            <div className="wide-menu-item noselect">Tools</div>
                        </div>
                    </div>
                    <div id="wide-scrolling-container">
                        <div className="wide-title-container">
                            <div>SENTINEL</div>
                            <div>HILL</div>
                        </div>
                        <div className="wide-menu-container">
                            <div className="wide-menu-item noselect">Home</div>
                            <div className="wide-menu-item noselect">News</div>
                            <div className="wide-menu-item noselect">Articles</div>
                            <div className="wide-menu-item noselect">Guides</div>
                            <div className="wide-menu-item noselect">Tools</div>
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