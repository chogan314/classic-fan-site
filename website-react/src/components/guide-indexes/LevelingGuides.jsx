import React, { Component } from 'react';
import Grid from '../grid/Grid';
import GridEntry from '../grid/GridEntry';
import Getter from '../../scripts/getter.js';
import SiteContainer from '../site-container/SiteContainer';
import levelingGuidesData from '../../res/levelingGuidesData.json';

class ClassGuides extends Component {
    constructor(props) {
        super(props);
        this.getter = new Getter("/php/get_leveling_guides.php");

        this.typeDataMap = {};

        this.state = { data: [] };
    }

    test() {
        var data = this.state.data.slice();
        Object.values(levelingGuidesData).forEach(value => data.push(value));
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
        return(
            <SiteContainer active="guides">
                <div id="main-content">
                    <Grid>
                        {this.state.data.map(data =>
                        <GridEntry
                            key={data.id}
                            entry_type_class={this.typeDataMap[data.type] ? this.typeDataMap[data.type].typeClass : null}
                            entry_type_name={this.typeDataMap[data.type] ? this.typeDataMap[data.type].typeName : null} 
                            entry_type_icon_path={this.typeDataMap[data.type] ? this.typeDataMap[data.type].typeIconPath : null}
                            link_to={data.link_to}
                            thumbnail_path={data.thumbnail_path}
                            author={data.author}
                            posted_at={data.posted_at}
                            title={data.title}
                            description={data.description} />)}
                    </Grid>
                </div>
            </SiteContainer>
        );
    }
}

export default ClassGuides;