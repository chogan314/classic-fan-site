import React, { Component } from 'react';
import Grid from './grid/Grid';
import GridEntry from './grid/GridEntry';
import Getter from '../scripts/getter.js';
import SiteContainer from './site-container/SiteContainer';

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

    getPage() {
        this.getter.get({}, onComplete);
        var parent = this;

        function onComplete(dbData) {
            var data = parent.state.data.slice();
            var newData = Object.values(dbData);
            newData.forEach(value => data.push(value));
            parent.setState({ data: data });
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
                        {this.state.data.map(data =>
                        <GridEntry
                            key={data.id}
                            // entry_type_class={this.typeDataMap[data.type]}
                            link_to="/test"
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