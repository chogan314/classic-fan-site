import React, { Component } from 'react';
import Links from './Links';
import Title from './Title';
import Menu from './Menu';
import FixedMenu from './FixedMenu';
import MobileMenu from './MobileMenu';
import WideContainer from './WideContainer';
import Footer from './Footer';
import '../../style/site-container.css';

class SiteContainer extends Component {
    render() {
        return(
            <div className="site-container dark-theme">
                <div className="background-overlay"></div>
                <Links />
                <Title />
                <Menu active={this.props.active} />
                <FixedMenu active={this.props.active} />
                <MobileMenu active={this.props.active} />
                <WideContainer active={this.props.active} >
                    { this.props.children }
                </WideContainer>
                <Footer />
            </div>
        );
    }
}

export default SiteContainer;