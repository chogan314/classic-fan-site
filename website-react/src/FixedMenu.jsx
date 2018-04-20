import React, { Component } from 'react';

class FixedMenu extends Component {
    render() {
        return(
            <div id="fixed-menu-section">
                <div class="section-wrapper">
                    <div class="menu-container">
                        <div class="menu-item noselect">Home</div>
                        <div class="menu-item noselect">News</div>
                        <div class="menu-item noselect">Articles</div>
                        <div class="menu-item noselect">Guides</div>
                        <div class="menu-item noselect">Tools</div>
                        <div class="menu-hamburger-icon"></div>
                        <div class="menu-close-icon"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FixedMenu;