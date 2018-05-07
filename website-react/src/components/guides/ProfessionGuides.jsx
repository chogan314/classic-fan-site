import React, { Component } from 'react';
import Grid from '../utils/Grid';
import Getter from '../../scripts/getter.js';
import SiteContainer from '../site-container/SiteContainer';
import ProfessionGuide from './ProfessionGuide';

class ProfessionGuides extends Component {
    constructor(props) {
        super(props);
        this.getter = new Getter("php/get_profession_guides.php");
        this.state = { professionGuides: {} };
    }

    getPage() {
        this.getter.get({}, onComplete);
        var parent = this;

        function onComplete(data) {
            var professionGuidesDict = {};
            Object.values(data).forEach(function(professionGuide) {
                var professionName = professionGuide.professionName;
                if (!professionGuidesDict[professionName]) {
                    professionGuidesDict[professionName] = [];
                }
                professionGuidesDict[professionName].push(professionGuide);
            });
            parent.setState({ professionGuides: professionGuidesDict });
        }
    }

    componentDidMount() {
        this.getPage();
    }

    render() {
        const parent = this;
        return(
            <SiteContainer active="guides">
                <div id="main-content">
                    { Object.keys(this.state.professionGuides).map(professionName =>
                        <div>
                            <div>{ professionName }</div>
                            <Grid>
                                { parent.state.professionGuides[professionName].map(professionGuide =>
                                    <ProfessionGuide key={professionGuide.id} data={professionGuide} />) }
                            </Grid>
                        </div>
                    ) }
                </div>
            </SiteContainer>
        );
    }
}

export default ProfessionGuides;