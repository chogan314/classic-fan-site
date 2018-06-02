import React, { Component } from 'react';

class ClassicDBLink extends Component {
    render() {
        return(
            <a href={"https://classicdb.ch/?" + this.props.type + "=" + this.props.id} target="_blank" rel={this.props.isNPC ? "noopener noreferrer" : this.props.type + "=" + this.props.id + " noopener noreferrer"} className={"db-link rarity-" + this.props.rarity}>{this.props.children}</a>
        );
    }
}

export default ClassicDBLink;