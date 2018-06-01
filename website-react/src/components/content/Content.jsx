import React, { Component } from 'react';
import SiteContainer from '../site-container/SiteContainer';
import '../../style/content.css';

class Content extends Component {
    componentDidMount() {
        var hordeIcon = document.createElement("img");
        hordeIcon.setAttribute("src", "/res/horde-logo.png");
        hordeIcon.setAttribute("alt", "horde icon");
        hordeIcon.classList.add("quest-icon");

        var allianceIcon = document.createElement("img");
        allianceIcon.setAttribute("src", "/res/alliance-logo.png");
        allianceIcon.setAttribute("alt", "alliance icon");
        allianceIcon.classList.add("quest-icon");

        Array.from(document.getElementsByClassName("quest-horde")).forEach(function(quest) {
            quest.prepend(hordeIcon.cloneNode(true));
        });
        Array.from(document.getElementsByClassName("quest-alliance")).forEach(function(quest) {
            quest.prepend(allianceIcon.cloneNode(true));
        });

        Array.from(document.getElementsByClassName("quest-chain")).forEach(function(questChain) {
            var index = 0;
            Array.from(questChain.getElementsByClassName("quest")).forEach(function(quest) {
                quest.style.marginLeft = (index * 20) + "px";
                index++;
            });
        });
    }

    render() {
        return(
            <SiteContainer>
                <div id="main-content">
                    <div id="content-section">
                        <div className="section-wrapper">
                            <div className="content-container">
                                <div className="content-title">Example Content Title</div>
                                <div className="content-thumbnail-container">
                                    <img src="/res/classic.jpg" alt="content thumbnail" className="content-thumbnail" />
                                </div>
                                <div className="content-details-container">
                                    <div className="content-author">Example Author</div>
                                    <div className="content-date">January 1st, 1970</div>
                                </div>
                                <div className="content-body">
                                    <div className="content-heading">
                                        Example Heading
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet purus interdum ligula elementum, non aliquet libero
                                        porta. Maecenas tempor turpis eu purus cursus, nec semper nisl suscipit. Quisque lacinia turpis
                                        dolor, in consequat eros vestibulum eget. Fusce a ex eu neque facilisis scelerisque. In lobortis
                                        est ac consequat egestas. Donec tempor mollis dictum. Sed diam urna, vestibulum ac purus at,
                                        fringilla bibendum augue. Sed condimentum sem sapien, euismod blandit est sodales nec. Etiam
                                        consectetur est non orci vulputate placerat. Nam molestie elit nec ante pulvinar, non blandit
                                        nunc iaculis.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet purus interdum ligula elementum, non aliquet libero
                                        porta. Maecenas tempor turpis eu purus cursus, nec semper nisl suscipit. Quisque lacinia turpis
                                        dolor, in consequat eros vestibulum eget. Fusce a ex eu neque facilisis scelerisque. In lobortis
                                        est ac consequat egestas. Donec tempor mollis dictum. Sed diam urna, vestibulum ac purus at,
                                        fringilla bibendum augue. Sed condimentum sem sapien, euismod blandit est sodales nec. Etiam
                                        consectetur est non orci vulputate placerat. Nam molestie elit nec ante pulvinar, non blandit
                                        nunc iaculis.
                                    </p>
                                    <div className="content-quote">
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet purus interdum ligula elementum, non aliquet libero
                                        porta. Maecenas tempor turpis eu purus cursus, nec semper nisl suscipit. Quisque lacinia turpis
                                        dolor, in consequat eros vestibulum eget."
                                    </div>
                                    <div className="content-heading">
                                        Another Example Heading
                                    </div>
                                    <ul>
                                        <li>First element</li>
                                        <li>Second element</li>
                                        <li>Third element</li>
                                        <li>Fourth element</li>
                                        <li>Fifth element</li>
                                    </ul>
                                    <ol>
                                        <li>
                                            <div>First element</div>
                                        </li>
                                        <li>
                                            <div>Second element</div>
                                        </li>
                                        <li>
                                            <div>Third element</div>
                                        </li>
                                        <li>
                                            <div>Fourth element</div>
                                        </li>
                                        <li>
                                            <div>Fifth element</div>
                                        </li>
                                    </ol>
                                    <p>
                                        <a href="https://classicdb.ch/?item=17065" target="_blank" rel="item=17065 noopener noreferrer" className="db-link rarity-epic">Medallion of Steadfast Might</a>
                                        <br />
                                        <a href="https://classicdb.ch/?item=4251" target="_blank" rel="item=4251 noopener noreferrer" className="db-link rarity-uncommon">Hillman's Shoulders</a>
                                        <br />
                                        <a href="https://classicdb.ch/?item=16706" target="_blank" rel="item=16706 noopener noreferrer" className="db-link rarity-rare">Wildheart Vest</a>
                                        <br />
                                        <a href="https://classicdb.ch/?item=1212" target="_blank" rel="item=1212 noopener noreferrer" className="db-link rarity-junk">Gnoll Spittle</a>
                                        <br />
                                        <a href="https://classicdb.ch/?item=19019" target="_blank" rel="item=19019 noopener noreferrer" className="db-link rarity-legendary">Thunderfury, Blessed Blade of the Windseeker</a>
                                        <br />
                                        <a href="https://classicdb.ch/?npc=10990" target="_blank" rel="npc=10990 noopener noreferrer" className="db-link rarity-misc">Alterac Ram</a>
                                        <br />
                                        <a href="https://classicdb.ch/?quest=762" target="_blank" rel="quest=762 noopener noreferrer" className="db-link rarity-misc">An Ambassador of Evil</a>
                                        <br />
                                        <a href="https://classicdb.ch/?spell=8925" target="_blank" rel="spell=8925 noopener noreferrer" className="db-link rarity-misc">Moonfire (Rank 3)</a>
                                        <br />
                                        <a href="https://classicdb.ch/?object=179548" target="_blank" rel="object=179548 noopener noreferrer" className="db-link rarity-misc">A Dusty Tome</a>
                                        <br />
                                        <a href="https://classicdb.ch/?zone=10" target="_blank" rel="zone=10 noopener noreferrer" className="db-link rarity-misc">Duskwood</a>
                                        <br />
                                        <a href="https://classicdb.ch/?faction=369" target="_blank" rel="faction=369 noopener noreferrer" className="db-link rarity-misc">Gadgetzan</a>
                                    </p>
                                    <p>
                                        Ragefire Chasm is a level 13 to 18 instance located in the Cleft of Shadow within Orgrimmar city. This dungeon requires around 30 to 50 minutes to complete.
                                    </p>
                                    <div className="content-heading">Tips and Recommendations</div>
                                    <ul className="wide-spaced-list">
                                        <li>
                                            Your tank and healer should be around level 15 for this dungeon. Your DPS can scrape by at level 13, but higher levels are preferred.
                                        </li>
                                        <li>
                                            Mages are incredibly helpful. Polymorph is the most reliable CC at this level and can really help reduce the pressure on weaker groups.
                                        </li>
                                        <li>
                                            Be careful around the lava. Seriously.
                                        </li>
                                        <li>
                                            <b>Healers</b>: Your mana pool is tiny at this point in the game, especially if you're in white gear. Consider trying to gather a strong group or getting a few more levels if you can cast a few heals from a full mana bar.
                                        </li>
                                        <li>
                                            <b>Healers</b>: You can begin casting a heal before your tank needs it. If completing the cast will result in overhealing, move to cancel it and try again. Certain addons that provide visualization for outgoing heals can be helpful with this strategy.
                                        </li>
                                        <li>
                                            <b>Healers</b>: Make sure you have water before entering the dungeon. You'll need a lot.</li>
                                        <li>
                                            <b>Tanks</b>: Pulling more than one pack will probably result in a wipe. Be very careful whilepulling. Warriors, try to get your hands on a ranged weapon and use that for difficult pulls.
                                        </li>
                                        <li>
                                            <b>Tanks</b>: Make sure your healer has mana before pulling the next pack.
                                        </li>
                                        <li>
                                            <b>Tanks</b>: Consider marking targets with raid markers. Focusing down at least the first mob in a pull will substantially reduce incoming damage.
                                        </li>
                                        <li>
                                            <b>DPS</b>: Whatever you do, don't pull aggro. Your healer probably has enough mana problems without having to heal you.
                                        </li>
                                    </ul>
                                    <div className="content-heading">Quests</div>
                                    <div className="quest-section">
                                        <div className="quest-container">
                                            <div className="quest-chain">
                                                <div className="quest quest-horde">
                                                    <a href="https://classicdb.ch/?quest=5726" target="_blank" rel="quest=5726 noopener noreferrer" className="db-link rarity-misc">Hidden Enemies (part 1)</a>
                                                </div>
                                                <div className="quest quest-horde">
                                                    <a href="https://classicdb.ch/?quest=5727" target="_blank" rel="quest=5727 noopener noreferrer" className="db-link rarity-misc">Hidden Enemies (part 2)</a>
                                                </div>
                                                <div className="quest quest-dungeon quest-horde">
                                                    <a href="https://classicdb.ch/?quest=5728" target="_blank" rel="quest=5728 noopener noreferrer" className="db-link rarity-misc">Hidden Enemies (part 3)</a>
                                                </div>
                                                <div className="quest quest-horde">
                                                    <a href="https://classicdb.ch/?quest=5729" target="_blank" rel="quest=5729 noopener noreferrer" className="db-link rarity-misc">Hidden Enemies (part 4)</a>
                                                </div>
                                                <div className="quest quest-horde">
                                                    <a href="https://classicdb.ch/?quest=5730" target="_blank" rel="quest=5730 noopener noreferrer" className="db-link rarity-misc">Hidden Enemies (part 5)</a>
                                                </div>
                                                <div className="quest-chain-label">
                                                    Rewards:
                                                </div>
                                                <div className="quest-chain-rewards">
                                                    <a href="https://classicdb.ch/?item=15443" target="_blank" rel="item=15443 noopener noreferrer" className="db-link rarity-uncommon">Kris of Orgrimmar</a>
                                                    <a href="https://classicdb.ch/?item=15445" target="_blank" rel="item=15445 noopener noreferrer" className="db-link rarity-uncommon">Hammer of Orgrimmar</a>
                                                    <a href="https://classicdb.ch/?item=15424" target="_blank" rel="item=15424 noopener noreferrer" className="db-link rarity-uncommon">Axe of Orgrimmar</a>
                                                    <a href="https://classicdb.ch/?item=15444" target="_blank" rel="item=15444 noopener noreferrer" className="db-link rarity-uncommon">Staff of Orgrimmar</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="quest-container">
                                            <div className="quest-chain">
                                                <div className="quest quest-dungeon quest-horde">
                                                    <a href="https://classicdb.ch/?quest=5722" target="_blank" rel="quest=5722 noopener noreferrer" className="db-link rarity-misc">Searching for the Lost Satchel</a>
                                                </div>
                                                <div className="quest quest-dungeon quest-horde">
                                                    <a href="https://classicdb.ch/?quest=5724" target="_blank" rel="quest=5724 noopener noreferrer" className="db-link rarity-misc">Returning the Lost Satchel</a>
                                                </div>
                                                <div className="quest-chain-label">
                                                    Rewards:
                                                </div>
                                                <div className="quest-chain-rewards">
                                                    <a href="https://classicdb.ch/?item=15452" target="_blank" rel="item=15452 noopener noreferrer" className="db-link rarity-uncommon">Featherbead Bracers</a>
                                                    <a href="https://classicdb.ch/?item=15453" target="_blank" rel="item=15453 noopener noreferrer" className="db-link rarity-uncommon">Savannah Bracers</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="quest-container">
                                            <div className="quest-chain">
                                                <div className="quest quest-dungeon quest-horde">
                                                    <a href="https://classicdb.ch/?quest=5761" target="_blank" rel="quest=5761 noopener noreferrer" className="db-link rarity-misc">Slaying the Beast</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="quest-container">
                                            <div className="quest-chain">
                                                <div className="quest quest-dungeon quest-horde">
                                                    <a href="https://classicdb.ch/?quest=5723" target="_blank" rel="quest=5723 noopener noreferrer" className="db-link rarity-misc">Testing an Enemy's Strength</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="quest-container">
                                            <div className="quest-chain">
                                                <div className="quest quest-dungeon quest-horde">
                                                    <a href="https://classicdb.ch/?quest=5725" target="_blank" rel="quest=5725 noopener noreferrer" className="db-link rarity-misc">The Power to Destroy...</a>
                                                </div>
                                                <div className="quest-chain-label">
                                                    Rewards:
                                                </div>
                                                <div className="quest-chain-rewards">
                                                    <a href="https://classicdb.ch/?item=15449" target="_blank" rel="item=15449 noopener noreferrer" className="db-link rarity-uncommon">Ghastly Trousers</a>
                                                    <a href="https://classicdb.ch/?item=15450" target="_blank" rel="item=15450 noopener noreferrer" className="db-link rarity-uncommon">Dredgemire Leggings</a>
                                                    <a href="https://classicdb.ch/?item=15451" target="_blank" rel="item=15451 noopener noreferrer" className="db-link rarity-uncommon">Gargoyle Leggings</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-heading">Bosses</div>
                                    <div className="boss-section">
                                        <div className="boss-container">
                                            <div className="boss">
                                                <a href="https://classicdb.ch/?npc=11517" target="_blank" rel="npc=11517 noopener noreferrer">
                                                    <img className="boss-image" src="/res/oggleflint.png" alt="Oggleflint" />
                                                </a>
                                                <div className="boss-name">
                                                    <a href="https://classicdb.ch/?npc=11517" target="_blank" rel="npc=11517 noopener noreferrer" className="db-link rarity-misc">Oggleflint</a>
                                                </div>
                                                <div className="boss-label">Notes:</div>
                                                <div className="boss-notes">
                                                    Can be dangerous when pulled with the trash in his room. Has a cleave.
                                                </div>
                                                <div className="boss-label">Drops:</div>
                                                <div className="boss-notes">
                                                    None
                                                </div>
                                            </div>
                                        </div>
                                        <div className="boss-container">
                                            <div className="boss">
                                                <a href="https://classicdb.ch/?npc=11520" target="_blank" rel="npc=11520 noopener noreferrer">
                                                    <img className="boss-image" src="/res/taragaman.png" alt="Taragaman the Hungerer" />
                                                </a>
                                                <div className="boss-name">
                                                    <a href="https://classicdb.ch/?npc=11520" target="_blank" rel="npc=11520 noopener noreferrer" className="db-link rarity-misc">Taragaman the Hungerer</a>
                                                </div>
                                                <div className="boss-label">Notes:</div>
                                                <div className="boss-notes">
                                                    Has a knockback, so be careful of the lava around him.
                                                </div>
                                                <div className="boss-label">Drops:</div>
                                                <div className="boss-drops">
                                                    <a href="https://classicdb.ch/?item=14148" target="_blank" rel="item=14148 noopener noreferrer" className="db-link rarity-uncommon">Crystalline Cuffs</a>
                                                    <a href="https://classicdb.ch/?item=14149" target="_blank" rel="item=14149 noopener noreferrer" className="db-link rarity-uncommon">Subterranean Cape</a>
                                                    <a href="https://classicdb.ch/?item=14145" target="_blank" rel="item=14145 noopener noreferrer" className="db-link rarity-uncommon">Cursed Felblade</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="boss-container">
                                            <div className="boss">
                                                <a href="https://classicdb.ch/?npc=11518" target="_blank" rel="npc=11518 noopener noreferrer">
                                                    <img className="boss-image" src="/res/jergosh.png" alt="Jergosh the Invoker" />
                                                </a>
                                                <div className="boss-name">
                                                    <a href="https://classicdb.ch/?npc=11518" target="_blank" rel="npc=11518 noopener noreferrer" className="db-link rarity-misc">Jergosh the Invoker</a>
                                                </div>
                                                <div className="boss-label">Notes:</div>
                                                <div className="boss-notes">
                                                    Basically a trash mob with a name.
                                                </div>
                                                <div className="boss-label">Drops:</div>
                                                <div className="boss-drops">
                                                    <a href="https://classicdb.ch/?item=14147" target="_blank" rel="item=14147 noopener noreferrer" className="db-link rarity-uncommon">Cavedweller Bracers</a>
                                                    <a href="https://classicdb.ch/?item=14150" target="_blank" rel="item=14150 noopener noreferrer" className="db-link rarity-uncommon">Robe of Evocation</a>
                                                    <a href="https://classicdb.ch/?item=14151" target="_blank" rel="item=14151 noopener noreferrer" className="db-link rarity-uncommon">Chanting Blade</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="boss-container">
                                            <div className="boss">
                                                <a href="https://classicdb.ch/?npc=11519" target="_blank" rel="npc=11519 noopener noreferrer">
                                                    <img className="boss-image" src="/res/bazzalan.png" alt="Bazzalan" />
                                                </a>
                                                <div className="boss-name">
                                                    <a href="https://classicdb.ch/?npc=11519" target="_blank" rel="npc=11519 noopener noreferrer" className="db-link rarity-misc">Bazzalan</a>
                                                </div>
                                                <div className="boss-label">Notes:</div>
                                                <div className="boss-notes">
                                                    Can deal a surprising amount of damage but is ultimately a pushover.
                                                </div>
                                                <div className="boss-label">Drops:</div>
                                                <div className="boss-notes">
                                                    None
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content-heading">Walkthrough</div>
                                    <img src="res/map-rfc.png" alt="instance map" class="content-insert-image" />
                                    <p>
                                        Head south along the red path until you reach a large room filled with troggs. Be careful when clearing this area; there are a few patrolling mobs. Pull mobs with a ranged attack and use the walls to break line of sight with casters to force them to come to you. Don't do any damage or healing until the tank has grouped up the mobs being pulled or you will pull aggro.
                                    </p>
                                    <p>
                                        After the large room has been cleared, you have the option to take the pink path. This leads to the titular satchel that is the turn in location for the <a href="https://classicdb.ch/?quest=5722" target="_blank noopener noreferrer" rel="quest=5722" class="db-link rarity-misc">Searching for the Lost Satchel</a> quest. The satchel is guarded by the miniboss <a href="https://classicdb.ch/?npc=11517" target="_blank noopener noreferrer" class="db-link rarity-misc">Oggleflint</a> and a couple trash mobs that can be pulled without aggroing the miniboss. Oggleflint has a fairly high damage cleave, so tanks should face him away from other members of the group. Despite being a named mob, Oggleflint drops no notable loot. After turning in Searching for the Lost Satchel and picking up <a href="https://classicdb.ch/?quest=5724" target="_blank noopener noreferrer" rel="quest=5724" class="db-link rarity-misc">Returning the Lost Satchel</a>, you can either return the way you came or drop down the nearby ledge. Dropping down the ledge and continuing the pink circuit gives more access to troggs for <a href="https://classicdb.ch/?quest=5723" target="_blank noopener noreferrer" rel="quest=5723" class="db-link rarity-misc">Testing an Enemy's Strength</a>.
                                    </p>
                                    <p>
                                        The blue path should be uneventful until you encounter Searing Blade enemies. Pull these very carefully and be on the look out for patrols. Searing Blade cultists and warlocks have a chance to drop quest items for <a href="https://classicdb.ch/?quest=5725" target="_blank noopener noreferrer" rel="quest=5725" class="db-link rarity-misc">The Power to Destroy...</a> <a href="https://classicdb.ch/?npc=11520" target="_blank noopener noreferrer" class="db-link rarity-misc">Taragaman the Hungerer</a> stands at the center of the cross over the lava. He has a knock back, so tanks should avoid standing with their backs towards the edge of the platform. Taragaman will drop his heart when he dies, the objective of <a href="https://classicdb.ch/?quest=5761" target="_blank noopener noreferrer" rel="quest=5761" class="db-link rarity-misc">Slaying the Beast</a>.
                                    </p>
                                    <p>
                                        You'll find <a href="https://classicdb.ch/?npc=11518" target="_blank noopener noreferrer" class="db-link rarity-misc">Jergosh the Invoker</a> at the end of the green path. He's fairly unremarkable, but you need to take care not to pull too many trash mobs with him. Killing him is one of the objectves of <a href="https://classicdb.ch/?quest=5728" target="_blank noopener noreferrer" rel="quest=5728" class="db-link rarity-misc">Hidden Enemies (part 3)</a>.
                                    </p>
                                    <p>
                                        The other objective of Hidden Enemies, <a href="https://classicdb.ch/?npc=11519" target="_blank noopener noreferrer" class="db-link rarity-misc">Bazzalan</a>, is at the end of the final path. He doesn't drop any notable loot, so he can be ignored if you don't need to complete the quest. You can take a shortcut to the ramp that leads to him by jumping up the lip of the lava pool that was near Jergosh. He does slightly more damage than the bosses you've fought so far, but isn't particularly dangerous.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SiteContainer>
        );
    }
}

export default Content;