import React, { Component } from 'react';
import SiteContainer from '../site-container/SiteContainer';
import Grid from '../utils/Grid';
import ContentPreview from './ContentPreview';
import previewDataJSON from '../../res/previewData.json';
import '../../style/home.css';

var page = 0;
var pageSize = 12;
var requesting = false;

function getPageTest(index) {
    var previewData = index.state.previewData.slice();
    Object.values(previewDataJSON).map(value => previewData.push(value));
    index.setState({ previewData: previewData });
}

function getPage(index) {
    if (requesting) {
        return;
    }

    var request = new XMLHttpRequest();
    request.onreadystatechange = action;
    request.open('GET', 'php/get_content_previews.php?pageSize=' + pageSize + '&page=' + page);
    request.send(null);
    requesting = true;

    function action() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var previewData = index.state.previewData.slice();

                try {
                    var newPreviewData = JSON.parse(request.responseText);
                } catch(e) {
                    alert(e + "\n" + request.responseText);
                }

                var newValues = Object.values(newPreviewData);
                newValues.map(value => previewData.push(value));
                index.setState({ previewData: previewData });
                page++;
            } else {
                alert('There was a problem with the request.');
            }
            requesting = false;
        }
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        page = 0;
        this.state = { previewData: [] };
    }

    componentDidMount() {
        getPageTest(this);
    }

    render() {
        return(
            <SiteContainer active="home">
                <div id="main-content">
                    <Grid>
                        { this.state.previewData.map(elem => <ContentPreview key={elem.id} data={elem} />) }
                    </Grid>
                    <div id="get-more" className="button noselect" onClick={() => getPage(this)}>Get More</div>
                </div>
            </SiteContainer>
        );
    }
}

export default Home;