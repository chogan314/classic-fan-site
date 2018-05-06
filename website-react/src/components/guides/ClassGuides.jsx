import React, { Component } from 'react';
import Grid from '../utils/Grid';
import Getter from '../../scripts/getter.js';
import SiteContainer from '../site-container/SiteContainer';
import ClassGuide from './ClassGuide';

class ClassGuides extends Component {
    constructor(props) {
        super(props);
        this.getter = new Getter("php/get_class_guides.php");
        this.state = { classGuides: {} };
    }

    getPage() {
        this.getter.get({}, onComplete);
        var parent = this;

        function onComplete(data) {
            var classGuidesDict = {};
            Object.values(data).forEach(function(classGuide) {
                var className = classGuide.className;
                if (!classGuidesDict[className]) {
                    classGuidesDict[className] = [];
                }
                classGuidesDict[className].push(classGuide);
            });
            parent.setState({ classGuides: classGuidesDict });
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
                    { Object.keys(this.state.classGuides).map(clsName =>
                        <div>
                            <div>{ clsName }</div>
                            <Grid>
                                { parent.state.classGuides[clsName].map(clsGuide => <ClassGuide key={clsGuide.id} data={clsGuide} />) }
                            </Grid>
                        </div>
                    ) }
                    {/* <Grid>
                        { this.state.guideTypes.map(elem => <GuideType key={elem.id} data={elem} />) }
                    </Grid> */}
                </div>
            </SiteContainer>
        );
    }
}

export default ClassGuides;