import React, { Component } from 'react';
import Grid from '../grid/Grid';
import GridEntry from '../grid/GridEntry';
import Getter from '../../scripts/getter.js';
import SiteContainer from '../site-container/SiteContainer';

class ClassGuides extends Component {
    constructor(props) {
        super(props);
        this.getter = new Getter("php/get_class_guides.php");
        this.state = { data: {} };
    }

    getPage() {
        this.getter.get({}, onComplete);
        var self = this;

        function onComplete(dbData) {
            var classGuidesDict = {};
            Object.values(dbData).forEach(function(classGuide) {
                var className = classGuide.className;
                if (!classGuidesDict[className]) {
                    classGuidesDict[className] = [];
                }
                classGuidesDict[className].push(classGuide);
            });
            self.setState({ data: classGuidesDict });
        }
    }

    componentDidMount() {
        this.getPage();
    }

    render() {
        const self = this;
        return(
            <SiteContainer active="guides">
                <div id="main-content">
                    {Object.keys(this.state.data).map(clsName =>
                        <div>
                            <div className="section-wrapper">
                                <div className="grid-section-heading heading">{clsName}</div>
                            </div>
                            <Grid>
                                {self.state.data[clsName].map(data =>
                                <GridEntry
                                    key={data.id}
                                    // entry_type_class="entry-type-article"
                                    // entry_type_name="Article"
                                    // entry_type_icon_path="res/writing-blue.png"
                                    link_to="/"
                                    thumbnail_path={data.thumbnail_path}
                                    author={data.author}
                                    posted_at={data.posted_at}
                                    title={data.title}
                                    description={data.description} />)}
                            </Grid>
                        </div>
                    )}
                </div>
            </SiteContainer>
        );
    }
}

export default ClassGuides;