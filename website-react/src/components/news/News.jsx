import React, { Component } from 'react';
import Grid from '../utils/Grid';
import Getter from '../../scripts/getter.js';
import SiteContainer from '../site-container/SiteContainer';
import NewsItem from './NewsItem';

class News extends Component {
    constructor(props) {
        super(props);
        this.page = 0;
        this.pageSize = 12;
        this.getter = new Getter("php/get_news.php");
        this.state = { news: [] };
    }

    getPage() {
        this.getter.get({ page: this.page, pageSize: this.pageSize }, onComplete);
        var parent = this;

        function onComplete(data) {
            var news = parent.state.news.slice();
            var newValues = Object.values(data);
            newValues.map(value => news.push(value));
            parent.setState({ news: news });
            parent.page++;
        }
    }

    componentDidMount() {
        this.getPage();
    }

    render() {
        return(
            <SiteContainer active="news">
                <div id="main-content">
                    <Grid>
                        { this.state.news.map(elem => <NewsItem key={elem.id} data={elem} />) }
                    </Grid>
                    <div id="get-more" className="button noselect" onClick={() => this.getPage()}>Get More</div>
                </div>
            </SiteContainer>
        );
    }
}

export default News;