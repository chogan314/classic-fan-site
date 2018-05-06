import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Guides from '../guides/Guides';
import Articles from '../articles/Articles';
import News from '../news/News';
import ClassGuides from '../guides/ClassGuides';

class Main extends Component {
    componentDidUpdate() {
        ReactDOM.findDOMNode(this).scrollIntoView();
    }

    render() {
        return(
            <Switch>
                <Route exact path='/' component={Home} />;
                <Route path='/guides' component={Guides} />;
                <Route path='/articles' component={Articles} />;
                <Route path='/news' component={News} />;
                <Route path='/test' component={ClassGuides} />;
            </Switch>
        );
    }
}

export default Main;