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
        this.getter = new Getter("/php/get_class_guides.php");

        this.typeDataMap = {
            "Druid": new TypeData("entry-type-druid", "Druid", "/res/class_icon_druid.png"),
            "Hunter": new TypeData("entry-type-hunter", "Hunter", "/res/class_icon_hunter.png"),
            "Mage": new TypeData("entry-type-mage", "Mage", "/res/class_icon_mage.png"),
            "Paladin": new TypeData("entry-type-paladin", "Paladin", "/res/class_icon_paladin.png"),
            "Priest": new TypeData("entry-type-priest", "Priest", "/res/class_icon_priest.png"),
            "Rogue": new TypeData("entry-type-rogue", "Rogue", "/res/class_icon_rogue.png"),
            "Shaman": new TypeData("entry-type-shaman", "Shaman", "/res/class_icon_shaman.png"),
            "Warlock": new TypeData("entry-type-warlock", "Warlock", "/res/class_icon_warlock.png"),
            "Warrior": new TypeData("entry-type-warrior", "Warrior", "/res/class_icon_warrior.png")
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