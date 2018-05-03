import React, { Component } from 'react';
import WideHeader from './WideHeader';

class WideContainer extends Component {
    render() {
        return(
            <div id="wide-content-wrapper">
                <WideHeader active={this.props.active} />
                { this.props.children }
                <div id="wide-layout-filler"></div>
            </div>
        );
    }
}

export default WideContainer;