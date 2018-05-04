import React, { Component } from 'react';
import Grid from '../utils/Grid';
import Getter from '../../scripts/getter.js';
import SiteContainer from '../site-container/SiteContainer';

class Articles extends Component {
    constructor(props) {
        super(props);
        this.page = 0;
        this.pageSize = 12;
        this.getter = new Getter("php/get_guide_types.php");
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

                    </Grid>
                </div>
            </SiteContainer>
        );
    }
}

export default Articles;