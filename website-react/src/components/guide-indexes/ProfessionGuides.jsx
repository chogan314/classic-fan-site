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
        this.getter = new Getter("/php/get_profession_guides.php");

        this.typeDataMap = {
            "Herbalism": new TypeData("entry-type-herbalism", "Herbalism", "/res/profession_icon_herbalism.png"),
            "Mining": new TypeData("entry-type-mining", "Mining", "/res/profession_icon_mining.png"),
            "Skinning": new TypeData("entry-type-skinning", "Skinning", "/res/profession_icon_skinning.png"),
            "Alchemy": new TypeData("entry-type-alchemy", "Alchemy", "/res/profession_icon_alchemy.png"),
            "Blacksmithing": new TypeData("entry-type-blacksmithing", "Blacksmithing", "/res/profession_icon_blacksmithing.png"),
            "Enchanting": new TypeData("entry-type-enchanting", "Enchanting", "/res/profession_icon_enchanting.png"),
            "Engineering": new TypeData("entry-type-engineering", "Engineering", "/res/profession_icon_engineering.png"),
            "Leatherworking": new TypeData("entry-type-leatherworking", "Leatherworking", "/res/profession_icon_leatherworking.png"),
            "Tailoring": new TypeData("entry-type-tailoring", "Tailoring", "/res/profession_icon_tailoring.png"),
            "Cooking": new TypeData("entry-type-cooking", "Cooking", "/res/profession_icon_cooking.png"),
            "First Aid": new TypeData("entry-type-first-aid", "First Aid", "/res/profession_icon_first_aid.png"),
            "Fishing": new TypeData("entry-type-fishing", "Fishing", "/res/profession_icon_fishing.png")
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

export default ProfessionGuides;