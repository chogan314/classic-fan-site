import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SiteContainer from './components/SiteContainer';
import Grid from './components/Grid';
import ContentPreview from './components/ContentPreview';
import './style/style.css';
// import previewDataJSON from './res/previewData.json';

var page = 0;
var pageSize = 12;
var requesting = false;

function getPage(index) {
    if (requesting) {
        return;
    }

    var request = new XMLHttpRequest();
    request.onreadystatechange = action;
    request.open('GET', 'php/get_content_previews.php?pageSize=' + pageSize + '&page=' + page);
    // request.send("pageSize=" + encodeURIComponent(pageSize) + "&page=" + encodeURIComponent(page));
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
                // Object.values(previewDataJSON).map(value => previewData.push(value));
                index.setState({ previewData: previewData });
                page++;
            } else {
                alert('There was a problem with the request.');
            }
            requesting = false;
        }
    }
}

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { previewData: [] };
    }

    componentDidMount() {
        getPage(this);
    }

    render() {
        if (this.state.previewData) {
            return(
                <SiteContainer>
                    <Grid>
                        { this.state.previewData.map(elem => <ContentPreview key={elem.id} data={elem} />) }
                    </Grid>
                    <div id="get-more" class="button noselect" onClick={() => getPage(this)}>Get More</div>
                </SiteContainer>
            );
        }

        return(
            <SiteContainer>
                <Grid>
                    ?????
                </Grid>
            </SiteContainer>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));