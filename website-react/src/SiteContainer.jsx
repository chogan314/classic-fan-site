import React, { Component } from 'react';
import Links from './Links';
import Title from './Title';
import Menu from './Menu';
import FixedMenu from './FixedMenu';
import MobileMenu from './MobileMenu';
import WideContainer from './WideContainer';
import Footer from './Footer';

class SiteContainer extends Component {
    render() {
        return(
            <div className="site-container dark-theme">
                <div className="background-overlay"></div>
                <Links />
                <Title />
                <Menu />
                <FixedMenu />
                <MobileMenu />
                <WideContainer />
                <Footer />
            </div>
        );
    }
}

export default SiteContainer;