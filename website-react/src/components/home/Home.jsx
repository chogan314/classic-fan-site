import React, { Component } from 'react';
import SiteContainer from '../site-container/SiteContainer';
import Grid from '../utils/Grid';
import ContentPreview from './ContentPreview';
import Getter from '../../scripts/getter.js';
import previewDataJSON from '../../res/previewData.json';
import '../../style/home.css';

function getPageTest(index) {
    var previewData = index.state.previewData.slice();
    Object.values(previewDataJSON).map(value => previewData.push(value));
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
        this.getPage();
    }

    render() {
        return(
            <SiteContainer active="home">
                <div id="main-content">
                    <Grid>
                        { this.state.previewData.map(elem => <ContentPreview key={elem.id} data={elem} />) }
                    </Grid>
                    <div id="get-more" className="button noselect" onClick={() => this.getPage()}>Get More</div>
                </div>
            </SiteContainer>
        );
    }
}

export default Home;