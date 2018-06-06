import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Guides from '../Guides';
import Articles from '../Articles';
import News from '../News';
import ClassGuides from '../guides/ClassGuides';
import ProfessionGuides from '../guides/ProfessionGuides';
import RagefireChasmGuide from '../content/RagefireChasmGuide';

class Main extends Component {
    componentDidUpdate() {
        ReactDOM.findDOMNode(this).scrollIntoView();
    }

    render() {
        return(
            <Switch>
                <Route exact path='/' component={RagefireChasmGuide} />
                <Route path='/home' component={Home} />
                <Route path='/news' component={News} />
                <Route path='/articles' component={Articles} />                
                <Route exact path='/guides' component={Guides} />
                <Route path='/guides/classes' component={ClassGuides} />
                <Route path='/guides/professions' component={ProfessionGuides} />
            </Switch>
        );
    }
}

export default Main;