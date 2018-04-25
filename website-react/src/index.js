import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SiteContainer from './SiteContainer';
import Grid from './Grid';
import ContentPreview from './ContentPreview';
import './style.css';
import previewData from './previewData.json';

function initPreviews() {
    return previewData;
}

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = initPreviews();
    }

    render() {
        return(
            <SiteContainer>
                <Grid>
                    { Object.keys(this.state).map(key => <ContentPreview key={key} data={this.state[key]} />) }
                </Grid>
            </SiteContainer>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));