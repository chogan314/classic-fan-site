import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SiteContainer from './components/SiteContainer';
import Grid from './components/Grid';
import ContentPreview from './components/ContentPreview';
import './style/style.css';
import previewData from './res/previewData.json';

function init(index) {
    var page = 0;
    var pageSize = 12;

    var request = new XMLHttpRequest();
    request.onreadystatechange = action;    
    request.open('GET', 'php/get_content_previews.php');
    request.send("pageSize=" + encodeURIComponent(page) + "&page=" + encodeURIComponent(pageSize));

    index.state.previewData = previewData;
    
    function action() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                // index.state.previewData = JSON.parse(request.responseText);
                index.setState({ previewData: JSON.parse(request.responseText) });
            } else {
                alert('There was a problem with the request.');
            }
        }
    }
}

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        init(this);
    }

    render() {
        if (this.state.previewData) {
            return(
                <SiteContainer>
                    <Grid>
                        { Object.values(this.state.previewData).map(value => <ContentPreview key={value.id} data={value} />) }
                    </Grid>
                </SiteContainer>
            );
        }

        return(
            <SiteContainer>
                <Grid>
                    {/* { (this.state.previewData) ? Object.values(this.state.previewData).map(value => <ContentPreview key={value.id} data={value} />) : <div>???</div>} */}
                    ??????
                </Grid>
            </SiteContainer>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));