import React, { Component } from 'react';
import Grid from './grid/Grid';
import GridEntry from './grid/GridEntry';
import Getter from '../scripts/getter.js';
import SiteContainer from './site-container/SiteContainer';
import articlesData from '../res/articlesData.json';

class Articles extends Component {
    constructor(props) {
        super(props);
        this.page = 0;
        this.pageSize = 12;
        this.getter = new Getter("php/get_articles.php");
        this.state = { data: [] };
    }

    test() {
        var data = this.state.data.slice();
        Object.values(articlesData).forEach(value => data.push(value));
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
            <SiteContainer active="articles">
                <div id="main-content">
                    <Grid>
                        {this.state.data.map(data =>
                        <GridEntry
                            key={data.id}
                            entry_type_class="entry-type-article"
                            entry_type_name="Article"
                            entry_type_icon_path="res/writing-blue.png"
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

export default Articles;