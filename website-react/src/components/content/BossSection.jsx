import React, { Component } from 'react';
import ClassicDBLink from './ClassicDBLink';

function BossNotes(props) {
    return(
        <div className="boss-notes-container">
            <div className="boss-label">Notes:</div>
            <div className="boss-notes">
                {props.notes}
            </div>
        </div>
    );
}

function BossDrops(props) {
    return(
        <div className="boss-drops-container">
            <div className="boss-label">Drops:</div>
            <div className="boss-drops">
                {props.drops ? (props.drops.map(drop =>
                    <ClassicDBLink type="item" id={drop.id} rarity={drop.rarity}>{drop.name}</ClassicDBLink>
                )) : <div className="boss-notes">None</div>}
            </div>
        </div>
    );
}

function Boss(props) {
    return(
        <div className="boss">
            <ClassicDBLink type="npc" id={props.id} rarity="misc">
                <img className="boss-image" src={props.thumbnailPath} alt={props.name} />
            </ClassicDBLink>
            <div className="boss-name">
                <ClassicDBLink type="npc" id={props.id} rarity="misc">{props.name}</ClassicDBLink>
            </div>
            {props.notes ? <BossNotes notes={props.notes} /> : null}
            <BossDrops drops={props.drops} />
        </div>
    );
}

class BossSection extends Component {
    render() {
        return(
            <div className="content-body-internal">
                <div className="content-heading">Bosses</div>
                <div className="boss-section">
                        {this.props.bosses.map(boss =>
                            <div className="boss-container">
                                <Boss
                                    id={boss.id}
                                    thumbnailPath={boss.thumbnailPath}
                                    name={boss.name}
                                    notes={boss.notes}
                                    drops={boss.drops} />
                            </div>
                        )}
                </div>
            </div>
        );
    }
}

export default BossSection;