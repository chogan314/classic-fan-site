import React, { Component } from 'react';
import SiteContainer from './site-container/SiteContainer';
import Grid from './grid/Grid';
import GridEntry from './grid/GridEntry';
import Getter from '../scripts/getter.js';
import TypeData from '../scripts/typeData.js';
import previewDataJSON from '../res/previewData.json';

class Home extends Component {
    constructor(props) {
        super(props);
        this.getter = new Getter("php/get_content_previews.php");
        this.page = 0;
        this.pageSize = 12;

        this.typeDataMap = {
            "NEWS": new TypeData("entry-type-news", "News", "res/folded-newspaper-dark-green.png"),
            "ARTICLE": new TypeData("entry-type-article", "Article", "res/writing-blue.png"),
            "GUIDE": new TypeData("entry-type-guide", "Guide", "res/tower-purple.png")
        };

        this.state = { data: [] };
    }

    test() {
        var data = this.state.data.slice();
        Object.values(previewDataJSON).forEach(value => data.push(value));
        this.setState({ data: data });
    }

    getPage() {
        this.getter.get({ page: this.page, pageSize: this.pageSize }, onComplete);
        var parent = this;

        function onComplete(dbData) {
            var data = parent.state.data.slice();
            var newData = Object.values(dbData);
            newData.forEach(value => data.push(value));
            parent.setState({ data: data });
            parent.page++;
        }
    }

    componentDidMount() {
        this.test();
    }

    render() {
        return(
            <SiteContainer active="home">
                <div id="main-content">
                    <Grid>
                        {this.state.data.map(data =>
                        <GridEntry
                            key={data.id}
                            entry_type_class={this.typeDataMap[data.type].typeClass}
                            entry_type_name={this.typeDataMap[data.type].typeName}
                            entry_type_icon_path={this.typeDataMap[data.type].typeIconPath}
                            link_to="/"
                            thumbnail_path={data.thumbnail_path}
                            author={data.author}
                            posted_at={data.posted_at}
                            title={data.title}
                            description={data.description} />)}
                    </Grid>
                    <div id="get-more" className="button noselect" onClick={() => this.test()}>Get More</div>
                </div>
            </SiteContainer>
        );
    }
}

export default Home;