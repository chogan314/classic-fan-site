import React, { Component } from 'react';
import Grid from '../grid/Grid';
import GridEntry from '../grid/GridEntry';
import Getter from '../../scripts/getter.js';
import SiteContainer from '../site-container/SiteContainer';
import TypeData from '../../scripts/typeData.js';
import professionGuidesData from '../../res/professionGuidesData.json';

class ProfessionGuides extends Component {
    constructor(props) {
        super(props);
        this.getter = new Getter("php/get_profession_guides.php");

        this.typeDataMap = {
            "Herbalism": new TypeData("entry-type-news", "Herbalism", "/res/folded-newspaper-dark-green.png"),
            "Mining": new TypeData("entry-type-article", "Mining", "/res/writing-blue.png"),
            "Skinning": new TypeData("entry-type-guide", "Skinning", "/res/tower-purple.png"),
            "Alchemy": new TypeData("entry-type-news", "Alchemy", "/res/folded-newspaper-dark-green.png"),
            "Blacksmithing": new TypeData("entry-type-article", "Blacksmithing", "/res/writing-blue.png"),
            "Enchanting": new TypeData("entry-type-guide", "Enchanting", "/res/tower-purple.png"),
            "Engineering": new TypeData("entry-type-news", "Engineering", "/res/folded-newspaper-dark-green.png"),
            "Leatherworking": new TypeData("entry-type-article", "Leatherworking", "/res/writing-blue.png"),
            "Tailoring": new TypeData("entry-type-guide", "Tailoring", "/res/tower-purple.png"),
            "Cooking": new TypeData("entry-type-news", "Cooking", "/res/folded-newspaper-dark-green.png"),
            "First Aid": new TypeData("entry-type-article", "First Aid", "/res/writing-blue.png"),
            "Fishing": new TypeData("entry-type-guide", "Fishing", "/res/tower-purple.png")
        };

        this.state = { data: [] };
    }

    test() {
        var temp = this.state.data.slice();
        var data = [];
        temp.forEach(value => {if (value.profession_type === "GATHERING") {data.push(value)}});
        Object.values(professionGuidesData).forEach(value => {if (value.profession_type === "GATHERING") {data.push(value)}});
        temp.forEach(value => {if (value.profession_type === "CRAFTING") {data.push(value)}});
        Object.values(professionGuidesData).forEach(value => {if (value.profession_type === "CRAFTING") {data.push(value)}});
        temp.forEach(value => {if (value.profession_type === "SECONDARY") {data.push(value)}});
        Object.values(professionGuidesData).forEach(value => {if (value.profession_type === "SECONDARY") {data.push(value)}});
        this.setState({ data: data });
    }

    getPage() {
        this.getter.get({}, onComplete);
        var self = this;

        function onComplete(dbData) {
            var temp = self.state.data.slice();
            var data = [];
            var newData = Object.values(dbData);
            temp.forEach(value => {if (value.profession_type === "GATHERING") {data.push(value)}});
            newData.forEach(value => {if (value.profession_type === "GATHERING") {data.push(value)}});
            temp.forEach(value => {if (value.profession_type === "CRAFTING") {data.push(value)}});
            newData.forEach(value => {if (value.profession_type === "CRAFTING") {data.push(value)}});
            temp.forEach(value => {if (value.profession_type === "SECONDARY") {data.push(value)}});
            newData.forEach(value => {if (value.profession_type === "SECONDARY") {data.push(value)}});
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

export default ProfessionGuides;