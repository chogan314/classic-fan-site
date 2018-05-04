import React, { Component } from 'react';
import Grid from '../utils/Grid';
import GuideType from './GuideType';
import Getter from '../../scripts/getter.js';
import previewDataJSON from '../../res/previewData.json';
import SiteContainer from '../site-container/SiteContainer';

function getPageTest(index) {
    var guideTypes = index.state.guideTypes.slice();
    Object.values(previewDataJSON).map(value => guideTypes.push(value));
    index.setState({ guideTypes: guideTypes });
}

class Guides extends Component {
    constructor(props) {
        super(props);
        this.getter = new Getter("php/get_guide_types.php");
        this.state = { guideTypes: [] };
    }

    getPage() {
        this.getter.get({}, onComplete);
        var parent = this;

        function onComplete(data) {
            var guideTypes = parent.state.guideTypes.slice();
            var newValues = Object.values(data);
            newValues.map(value => guideTypes.push(value));
            parent.setState({ guideTypes: guideTypes });
        }
    }

    componentDidMount() {
        this.getPage();
    }

    render() {
        return(
            <SiteContainer active="guides">
                <div id="main-content">
                    <Grid>
                        { this.state.guideTypes.map(elem => <GuideType key={elem.id} data={elem} />) }
                    </Grid>
                </div>
            </SiteContainer>
        );
    }
}

export default Guides;