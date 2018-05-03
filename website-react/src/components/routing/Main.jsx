import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Guides from '../guides/Guides';

class Main extends Component {
    componentDidUpdate() {
        ReactDOM.findDOMNode(this).scrollIntoView();
    }

    render() {
        return(
            <Switch>
                <Route exact path='/' component={Home} />;
                <Route path='/guides' component={Guides} />;
            </Switch>
        );
    }
}

export default Main;