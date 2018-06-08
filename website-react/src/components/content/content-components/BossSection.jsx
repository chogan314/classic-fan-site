import React, { Component } from 'react';
import ClassicDBLink from './ClassicDBLink';

function BossNotes(props) {
    return(
        <div className="boss-notes-container">
            <div className="boss-label">Notes:</div>
            <div className="boss-notes">
                {props.children}
            </div>
        </div>
    );
}

function BossDrops(props) {
    return(
        <div className="boss-drops-container">
            <div className="boss-label">Drops:</div>
            <div className="boss-drops">
                {props.children}
            </div>
        </div>
    );
}

function Boss(props) {
    return(
        <div className="boss-container">
            <div className="boss">
                <ClassicDBLink type="npc" id={props.id} rarity="misc">
                    <img className="boss-image" src={props.thumbnailPath} alt={props.name} />
                </ClassicDBLink>
                <div className="boss-name">
                    <ClassicDBLink type="npc" id={props.id} rarity="misc">{props.name}</ClassicDBLink>
                </div>
                {props.children}
            </div>
        </div>
    );
}

class BossSection extends Component {
    render() {
        return(
            <div className="boss-section">
                {this.props.children}
            </div>
        );
    }
}

export { BossSection, Boss, BossNotes, BossDrops };