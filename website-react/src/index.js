import React from 'react';
import ReactDOM from 'react-dom';
import SiteContainer from './SiteContainer';
import Grid from './Grid';
import './style.css';

function Index(props) {
    return(
        <SiteContainer>
            <Grid />
        </SiteContainer>
    );
}

ReactDOM.render(<Index />, document.getElementById('root'));