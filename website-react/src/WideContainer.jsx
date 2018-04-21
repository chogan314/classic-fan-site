import React, { Component } from 'react';
import WideHeader from './WideHeader';
import Grid from './Grid';

class WideContainer extends Component {
    render() {
        return(
            <div id="wide-content-wrapper">
                <WideHeader />
                <Grid />
                <div id="wide-layout-filler"></div>
            </div>
        );
    }
}

export default WideContainer;