import React, { Component } from 'react';
import SiteContainer from '../site-container/SiteContainer';
import Grid from '../utils/Grid';
import GridEntry from '../utils/GridEntry';
import Getter from '../../scripts/getter.js';
import previewDataJSON from '../../res/previewData.json';

function getPageTest(index) {
    var previewData = [];
    Object.values(previewDataJSON).forEach(value => previewData.push(value));
    index.setState({ previewData: previewData });
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.getter = new Getter("php/get_content_previews.php");
        this.page = 0;
        this.pageSize = 12;
        this.state = { previewData: [] };
    }

    getPage() {
        this.getter.get({ page: this.page, pageSize: this.pageSize }, onComplete);
        var parent = this;

        function onComplete(data) {
            var previewData = parent.state.previewData.slice();
            var newValues = Object.values(data);
            newValues.map(value => previewData.push(value));
            parent.setState({ previewData: previewData });
            parent.page++;
        }
    }

    componentDidMount() {
        getPageTest(this);
    }

    getEntryTypeClass(type) {
        switch (type) {
            case "NEWS":
            return "entry-type-news";
            case "ARTICLE":
            return "entry-type-article";
            case "GUIDE":
            return "entry-type-guide";
            default:
            return null;
        }
    }

    getEntryTypeName(type) {
        switch (type) {
            case "NEWS":
            return "News";
            case "ARTICLE":
            return "Article";
            case "GUIDE":
            return "Guide";
            default:
            return null;
        }
    }

    getEntryTypeIconPath(type) {
        switch (type) {
            case "NEWS":
            return "res/folded-newspaper-dark-green.png";
            case "ARTICLE":
            return "res/writing-blue.png";
            case "GUIDE":
            return "res/tower-purple.png";
            default:
            return null;
        }
    }

    render() {
        return(
            <SiteContainer active="home">
                <div id="main-content">
                    <Grid>
                        {this.state.previewData.map(data =>
                        <GridEntry 
                            key={data.id} 
                            entry_type_class={this.getEntryTypeClass(data.type)}
                            entry_type_name={this.getEntryTypeName(data.type)}
                            entry_type_icon_path={this.getEntryTypeIconPath(data.type)}
                            link_to="/"
                            thumbnail_path={data.thumbnail_path}
                            author={data.author}
                            posted_at={data.posted_at}
                            title={data.title}
                            description={data.description} />)}
                    </Grid>
                    <div id="get-more" className="button noselect" onClick={() => this.getPage()}>Get More</div>
                </div>
            </SiteContainer>
        );
    }
}

export default Home;