import React, { Component } from 'react';

class MobileMenu extends Component {
    render() {
        return(
            <div id="mobile-menu-section">
                <div class="section-wrapper">
                    <div class="mobile-menu">
                        <div class="mobile-menu-container">
                            <div class="mobile-menu-item noselect">Home</div>
                            <div class="mobile-menu-item noselect">News</div>
                            <div class="mobile-menu-item noselect">Articles</div>
                            <div class="mobile-menu-item noselect">Guides</div>
                            <div class="mobile-menu-item noselect">Tools</div>
                        </div>
                        <div class="mobile-links-container">
                            <div class="mobile-links-item noselect">Contact</div>
                            <div class="mobile-links-item noselect">Write for Us</div>
                            <div class="mobile-links-item noselect">Login</div>
                            <div class="mobile-links-item noselect">Register</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MobileMenu;