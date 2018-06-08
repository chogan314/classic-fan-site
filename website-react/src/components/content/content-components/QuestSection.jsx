import React, { Component } from 'react';
import ClassicDBLink from './ClassicDBLink';

function QuestChain(props) {
    return(
        <div className="quest-chain-container">
            <div className="quest-chain">
                {props.children}
            </div>
        </div>
    );
}

function Quest(props) {
    return(
        <div className={props.faction ? "quest quest-" + props.faction : "quest"}>
            <ClassicDBLink type="quest" id={props.id} rarity="misc">{props.name}</ClassicDBLink>
        </div>
    );
}

function QuestChainRewards(props) {
    return(
        <div className="quest-chain-rewards-container">
            <div className="quest-chain-label">Rewards:</div>
            <div className="quest-chain-rewards">
                {props.children}
            </div>
        </div>
    );
}

function QuestChainNotes(props) {
    return(
        <div className="quest-chain-notes-container">
            <div className="quest-chain-label">Notes:</div>
            <div className="quest-chain-notes">
                {props.children}
            </div>
        </div>
    );
}

class QuestSection extends Component {
    render() {
        return(
            <div className="quest-section">
                {this.props.children}
            </div>
        );
    }
}

export { QuestSection, QuestChain, Quest, QuestChainRewards, QuestChainNotes };