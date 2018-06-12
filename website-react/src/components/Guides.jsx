import React, { Component } from 'react';
import Grid from './grid/Grid';
import GridEntry from './grid/GridEntry';
import Getter from '../scripts/getter.js';
import SiteContainer from './site-container/SiteContainer';
import guideTypesData from '../res/guideTypesData.json';

class Guides extends Component {
    constructor(props) {
        super(props);
        this.getter = new Getter("php/get_guide_types.php");
        this.typeDataMap = { 
            "Class": "entry-type-class-guides",
            "Dungeon": "entry-type-dungeon-guides",
            "Farming": "entry-type-farming-guides",
            "Leveling": "entry-type-leveling-guides",
            "Profession": "entry-type-profession-guides",
            "Raid": "entry-type-raid-guides"
        };
        this.state = { data: [] };
    }

    test() {
        var data = this.state.data.slice();
        Object.values(guideTypesData).forEach(value => data.push(value));
        this.setState({ data: data });
    }

    getPage() {
        this.getter.get({}, onComplete);
        var self = this;

        function onComplete(dbData) {
            var data = self.state.data.slice();
            var newData = Object.values(dbData);
            newData.forEach(value => data.push(value));
            self.setState({ data: data });
        }
    }

    componentDidMount() {
        this.getPage();
    }

    render() {
        var self = this;
        return(
            <SiteContainer active="guides">
                <div id="main-content">
                    <Grid>
                        {self.state.data.map(data =>
                        <GridEntry
                            key={data.id}
                            link_to={data.link_to}
                            thumbnail_path={data.thumbnail_path}
                            title={data.type + " Guides"}
                            description={data.description} />)}
                    </Grid>
                </div>
            </SiteContainer>
        );
    }
}

export default Guides;