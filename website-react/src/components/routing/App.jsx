import React, { Component } from 'react';
import SiteContainer from '../site-container/SiteContainer';
import Main from './Main';

class App extends Component {
    render() {
        return(
            <SiteContainer>
                <Main />
            </SiteContainer>
        );
    }
}

export default App;