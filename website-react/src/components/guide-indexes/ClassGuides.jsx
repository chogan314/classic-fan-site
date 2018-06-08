import React, { Component } from 'react';
import Grid from '../grid/Grid';
import GridEntry from '../grid/GridEntry';
import Getter from '../../scripts/getter.js';
import SiteContainer from '../site-container/SiteContainer';
import TypeData from '../../scripts/typeData.js';
import classGuidesData from '../../res/classGuidesData.json';

class ClassGuides extends Component {
    constructor(props) {
        super(props);
        this.getter = new Getter("php/get_class_guides.php");

        this.typeDataMap = {
            "Druid": new TypeData("entry-type-news", "Druid", "/res/folded-newspaper-dark-green.png"),
            "Hunter": new TypeData("entry-type-article", "Hunter", "/res/writing-blue.png"),
            "Mage": new TypeData("entry-type-guide", "Mage", "/res/tower-purple.png"),
            "Paladin": new TypeData("entry-type-news", "Paladin", "/res/folded-newspaper-dark-green.png"),
            "Priest": new TypeData("entry-type-article", "Priest", "/res/writing-blue.png"),
            "Rogue": new TypeData("entry-type-guide", "Rogue", "/res/tower-purple.png"),
            "Shaman": new TypeData("entry-type-news", "Shaman", "/res/folded-newspaper-dark-green.png"),
            "Warlock": new TypeData("entry-type-article", "Warlock", "/res/writing-blue.png"),
            "Warrior": new TypeData("entry-type-guide", "Warrior", "/res/tower-purple.png")
        };

        this.state = { data: [] };
    }

    test() {
        var data = this.state.data.slice();
        Object.values(classGuidesData).forEach(value => data.push(value));
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
        this.test();
    }

    render() {
        return(
            <SiteContainer active="guides">
                <div id="main-content">
                    <Grid>
                        {this.state.data.map(data =>
                        <GridEntry
                            key={data.id}
                            entry_type_class={this.typeDataMap[data.type].typeClass}
                            entry_type_name={this.typeDataMap[data.type].typeName}
                            entry_type_icon_path={this.typeDataMap[data.type].typeIconPath}
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