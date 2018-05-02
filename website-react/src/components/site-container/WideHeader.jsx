import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WideHeader extends Component {
    render() {
        return(
            <div id="wide-header-section">
                <div className="lhs-section-wrapper">
                    <div id="wide-links-section">
                        <div id="wide-links-container">
                            <div className="wide-links-item noselect"><Link to='/'>Contact</Link></div>
                            <div className="wide-links-item noselect"><Link to='/'>Write for Us</Link></div>
                            <div className="wide-links-item noselect"><Link to='/'>Login</Link></div>
                            <div className="wide-links-item noselect"><Link to='/'>Register</Link></div>
                        </div>
                    </div>
                    <div id="wide-nonscrolling-container">
                        <div className="wide-title-container">
                            <div>SENTINEL</div>
                            <div>HILL</div>
                        </div>
                        <div className="wide-menu-container">
                            <div className="wide-menu-item noselect"><Link to='/'>Home</Link></div>
                            <div className="wide-menu-item noselect"><Link to='/'>News</Link></div>
                            <div className="wide-menu-item noselect"><Link to='/'>Articles</Link></div>
                            <div className="wide-menu-item noselect"><Link to='/guides'>Guides</Link></div>
                            <div className="wide-menu-item noselect"><Link to='/'>Tools</Link></div>
                        </div>
                    </div>
                    <div id="wide-scrolling-container">
                        <div className="wide-title-container">
                            <div>SENTINEL</div>
                            <div>HILL</div>
                        </div>
                        <div className="wide-menu-container">
                            <div className="wide-menu-item noselect"><Link to='/'>Home</Link></div>
                            <div className="wide-menu-item noselect"><Link to='/'>News</Link></div>
                            <div className="wide-menu-item noselect"><Link to='/'>Articles</Link></div>
                            <div className="wide-menu-item noselect"><Link to='/guides'>Guides</Link></div>
                            <div className="wide-menu-item noselect"><Link to='/'>Tools</Link></div>
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