import React, { Component } from 'react';
import Grid from '../utils/Grid';
import GuideType from './GuideType';
import previewDataJSON from '../../res/previewData.json';

var requesting = false;

function getPageTest(index) {
    var guideTypes = index.state.guideTypes.slice();
    Object.values(previewDataJSON).map(value => guideTypes.push(value));
    index.setState({ guideTypes: guideTypes });
}

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
                var guideTypes = guides.state.guideTypes.slice();

                try {
                    var newPreviewData = JSON.parse(request.responseText);
                } catch(e) {
                    alert(e + "\n" + request.responseText);
                }

                var newValues = Object.values(newPreviewData);
                newValues.map(value => guideTypes.push(value));
                guides.setState({ guideTypes: guideTypes });
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
        if (this.state.guideTypes) {
            return(
                <Grid>
                    { this.state.guideTypes.map(elem => <GuideType key={elem.id} data={elem} />) }
                </Grid>
            );
        }

        return(
            <Grid>
                ?????
            </Grid>
        );
    }
}

export default Guides;