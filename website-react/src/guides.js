import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SiteContainer from './components/SiteContainer';
import Grid from './components/Grid';
import GuideType from './components/GuideType';
import './style/style.css';

var page = 0;
var pageSize = 12;
var requesting = false;

function getPage(guides) {
    if (requesting) {
        return;
    }

    var request = new XMLHttpRequest();
    request.onreadystatechange = action;
    request.open('GET', 'php/get_guide_types.php');
    request.send(null);
    requesting = true;

    function action() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var previewData = guides.state.previewData.slice();

                try {
                    var newPreviewData = JSON.parse(request.responseText);
                } catch(e) {
                    alert(e + "\n" + request.responseText);
                }

                var newValues = Object.values(newPreviewData);
                newValues.map(value => previewData.push(value));
                guides.setState({ previewData: previewData });
                page++;
            } else {
                alert('There was a problem with the request.');
            }
            requesting = false;
        }
    }
}

class Guides extends Component {
    constructor(props) {
        super(props);
        this.state = { guideTypes: [] };
    }

    componentDidMount() {
        getPage(this);
    }

    render() {
        if (this.state.previewData) {
            return(
                <SiteContainer>
                    <Grid>
                        { this.state.previewData.map(elem => <GuideType key={elem.id} data={elem} />) }
                    </Grid>
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

ReactDOM.render(<Guides />, document.getElementById('root'));