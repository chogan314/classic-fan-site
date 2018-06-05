import React, { Component } from 'react';
import ClassicDBLink from './ClassicDBLink';

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
                {props.rewards.map(reward =>
                    <ClassicDBLink type="item" id={reward.id} rarity={reward.rarity}>{reward.name}</ClassicDBLink>
                )}
            </div>
        </div>
    );
}

function QuestChainNotes(props) {
    return(
        <div className="quest-chain-notes-container">
            <div className="quest-chain-label">Notes:</div>
            {props.notes.map(note =>
                note
            )}
        </div>
    );
}

function QuestChain(props) {
    return(
        <div className="quest-chain">
            {props.quests.map(quest =>
                <Quest
                    id={quest.id}
                    name={quest.name}
                    faction={quest.faction} />
            )}
            {props.rewards ? <QuestChainRewards rewards={props.rewards} /> : null}
            {props.notes ? <QuestChainNotes notes={props.notes} /> : null}
        </div>
    );
}

class QuestSection extends Component {
    render() {
        return(
            <div className="content-body-internal">
                <div className="content-heading">Quests</div>
                <div className="quest-section">
                    {this.props.questChains.map(questChain =>
                        <div className="quest-chain-container">
                            <QuestChain
                                quests={questChain.quests}
                                rewards={questChain.rewards}
                                notes={questChain.notes} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default QuestSection;