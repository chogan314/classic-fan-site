import React, { Component } from 'react';
import WideHeader from './WideHeader';

class WideContainer extends Component {
    render() {
        return(
            <div id="wide-content-wrapper">
                <WideHeader />
                <div id="main-content">
                    { this.props.children }
                </div>
                <div id="wide-layout-filler"></div>
            </div>
        );
    }
}

export default WideContainer;