import React, { Component } from 'react';
import Grid from '../utils/Grid';
import Getter from '../../scripts/getter.js';
import SiteContainer from '../site-container/SiteContainer';
import Article from './Article';

class Articles extends Component {
    constructor(props) {
        super(props);
        this.page = 0;
        this.pageSize = 12;
        this.getter = new Getter("php/get_articles.php");
        this.state = { articles: [] };
    }

    getPage() {
        this.getter.get({ page: this.page, pageSize: this.pageSize }, onComplete);
        var parent = this;

        function onComplete(data) {
            var articles = parent.state.articles.slice();
            var newValues = Object.values(data);
            newValues.map(value => articles.push(value));
            parent.setState({ articles: articles });
            parent.page++;
        }
    }

    componentDidMount() {
        this.getPage();
    }

    render() {
        return(
            <SiteContainer active="articles">
                <div id="main-content">
                    <Grid>
                        { this.state.articles.map(elem => <Article key={elem.id} data={elem} />) }
                    </Grid>
                    <div id="get-more" className="button noselect" onClick={() => this.getPage()}>Get More</div>
                </div>
            </SiteContainer>
        );
    }
}

export default Articles;