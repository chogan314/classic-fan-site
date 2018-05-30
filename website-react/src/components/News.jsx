import React, { Component } from 'react';
import Grid from './grid/Grid';
import GridEntry from './grid/GridEntry';
import Getter from '../scripts/getter.js';
import SiteContainer from './site-container/SiteContainer';
import newsData from '../res/newsData.json';

class News extends Component {
    constructor(props) {
        super(props);
        this.page = 0;
        this.pageSize = 12;
        this.getter = new Getter("php/get_news.php");
        this.state = { data: [] };
    }

    test() {
        var data = this.state.data.slice();
        Object.values(newsData).forEach(value => data.push(value));
        this.setState({ data: data });
    }

    getPage() {
        this.getter.get({ page: this.page, pageSize: this.pageSize }, onComplete);
        var self = this;

        function onComplete(dbData) {
            var data = self.state.data.slice();
            var newData = Object.values(dbData);
            newData.forEach(value => data.push(value));
            self.setState({ data: data });
            self.page++;
        }
    }

    componentDidMount() {
        this.test();
    }

    render() {
        return(
            <SiteContainer active="news">
                <div id="main-content">
                    <Grid>
                        {this.state.data.map(data =>
                        <GridEntry
                            key={data.id}
                            entry_type_class="entry-type-news"
                            entry_type_name="News"
                            entry_type_icon_path="res/folded-newspaper-dark-green.png"
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

export default News;