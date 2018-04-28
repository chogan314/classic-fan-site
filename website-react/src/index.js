import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SiteContainer from './components/SiteContainer';
import Grid from './components/Grid';
import ContentPreview from './components/ContentPreview';
import './style/style.css';
import previewData from './res/previewData.json';

function initPreviews() {
    return previewData;
}

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { previewData: initPreviews() };
    }

    render() {
        return(
            <SiteContainer>
                <Grid>
                    { Object.keys(this.state.previewData).map(key => <ContentPreview key={key} data={this.state.previewData[key]} />) }
                </Grid>
            </SiteContainer>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));