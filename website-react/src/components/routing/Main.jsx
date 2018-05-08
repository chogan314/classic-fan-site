import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Guides from '../Guides';
import Articles from '../Articles';
import News from '../News';
import ClassGuides from '../guides/ClassGuides';

class Main extends Component {
    componentDidUpdate() {
        ReactDOM.findDOMNode(this).scrollIntoView();
    }

    render() {
        return(
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/guides' component={Guides} />
                <Route path='/articles' component={Articles} />
                <Route path='/news' component={News} />
                <Route path='/test' component={ClassGuides} />
            </Switch>
        );
    }
}

export default Main;