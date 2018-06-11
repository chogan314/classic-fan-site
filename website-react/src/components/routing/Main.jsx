import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Guides from '../Guides';
import Articles from '../Articles';
import News from '../News';
import ClassGuides from '../guide-indexes/ClassGuides';
import ProfessionGuides from '../guide-indexes/ProfessionGuides';
import DungeonGuides from '../guide-indexes/DungeonGuides';
import RaidGuides from '../guide-indexes/RaidGuides';
import FarmingGuides from '../guide-indexes/FarmingGuides';
import LevelingGuides from '../guide-indexes/LevelingGuides';

import RagefireChasmGuide from '../content/guides/dungeons/RagefireChasmGuide';

class Main extends Component {
    componentDidUpdate() {
        ReactDOM.findDOMNode(this).scrollIntoView();
    }

    render() {
        return(
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/news' component={News} />
                <Route exact path='/articles' component={Articles} />                
                <Route exact path='/guides' component={Guides} />
                <Route exact path='/guides/classes' component={ClassGuides} />
                <Route exact path='/guides/professions' component={ProfessionGuides} />
                <Route exact path='/guides/dungeons' component={DungeonGuides} />
                <Route exact path='/guides/raids' component={RaidGuides} />
                <Route exact path='/guides/farming' component={FarmingGuides} />
                <Route exact path='/guides/leveling' component={LevelingGuides} />

                <Route exact path='/guides/dungeons/ragefire_chasm' component={RagefireChasmGuide} />
            </Switch>
        );
    }
}

export default Main;