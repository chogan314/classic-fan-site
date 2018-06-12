import React, { Component } from 'react';
import Grid from '../grid/Grid';
import GridEntry from '../grid/GridEntry';
import Getter from '../../scripts/getter.js';
import SiteContainer from '../site-container/SiteContainer';
import TypeData from '../../scripts/typeData.js';
import dungeonGuidesData from '../../res/dungeonGuidesData.json';

class ClassGuides extends Component {
    constructor(props) {
        super(props);
        this.getter = new Getter("php/get_dungeon_guides.php");

        this.typeDataMap = {
            "Ragefire Chasm": new TypeData("entry-type-news", "Ragefire Chasm", "/res/folded-newspaper-dark-green.png"),
            "The Deadmines": new TypeData("entry-type-article", "The Deadmines", "/res/writing-blue.png"),
            "Wailing Caverns": new TypeData("entry-type-guide", "Wailing Caverns", "/res/tower-purple.png"),
            "Shadowfang Keep": new TypeData("entry-type-news", "Shadowfang Keep", "/res/folded-newspaper-dark-green.png"),
            "The Stockade": new TypeData("entry-type-article", "The Stockade", "/res/writing-blue.png"),
            "Blackfathom Deeps": new TypeData("entry-type-guide", "Blackfathom Deeps", "/res/tower-purple.png"),
            "Gnomeregan": new TypeData("entry-type-news", "Gnomeregan", "/res/folded-newspaper-dark-green.png"),
            "Razorfen Kraul": new TypeData("entry-type-article", "Razorfen Kraul", "/res/writing-blue.png"),
            "The Scarlet Monastery": new TypeData("entry-type-guide", "The Scarlet Monastery", "/res/tower-purple.png"),
            "Razorfen Downs": new TypeData("entry-type-news", "Razorfen Downs", "/res/folded-newspaper-dark-green.png"),
            "Uldaman": new TypeData("entry-type-article", "Uldaman", "/res/writing-blue.png"),
            "Zul'Farrak": new TypeData("entry-type-guide", "Zul'Farrak", "/res/tower-purple.png"),
            "Maraudon": new TypeData("entry-type-news", "Maraudon", "/res/folded-newspaper-dark-green.png"),
            "Sunken Temple": new TypeData("entry-type-article", "Sunken Temple", "/res/writing-blue.png"),
            "Blackrock Depths": new TypeData("entry-type-guide", "Blackrock Depths", "/res/tower-purple.png"),
            "Lower Blackrock Spire": new TypeData("entry-type-news", "Lower Blackrock Spire", "/res/folded-newspaper-dark-green.png"),
            "Upper Blackrock Spire": new TypeData("entry-type-article", "Upper Blackrock Spire", "/res/writing-blue.png"),
            "Dire Maul": new TypeData("entry-type-guide", "Dire Maul", "/res/tower-purple.png"),
            "Stratholme": new TypeData("entry-type-article", "Stratholme", "/res/writing-blue.png"),
            "Scholomance": new TypeData("entry-type-guide", "Scholomance", "/res/tower-purple.png")
        };

        this.state = { data: [] };
    }

    test() {
        var data = this.state.data.slice();
        Object.values(dungeonGuidesData).forEach(value => data.push(value));
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