import React, { Component } from 'react';
import SiteContainer from '../site-container/SiteContainer';
import ClassicDBLink from './ClassicDBLink';
import QuestSection from './QuestSection';
import BossSection from './BossSection';
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
                                        <ClassicDBLink type="item" id={17065} rarity="epic">Medallion of Steadfast Might</ClassicDBLink><br />
                                        <ClassicDBLink type="item" id={4251} rarity="uncommon">Hillman's Shoulders</ClassicDBLink><br />
                                        <ClassicDBLink type="item" id={16706} rarity="rare">Wildheart Vest</ClassicDBLink><br />
                                        <ClassicDBLink type="item" id={1212} rarity="junk">Gnoll Spittle</ClassicDBLink><br />
                                        <ClassicDBLink type="item" id={19019} rarity="legendary">Thunderfury, Blessed Blade of the Windseeker</ClassicDBLink><br />
                                        <ClassicDBLink type="npc" id={10990} rarity="misc" isNPC={true}>Alterac Ram</ClassicDBLink><br />
                                        <ClassicDBLink type="quest" id={762} rarity="misc">An Ambassador of Evil</ClassicDBLink><br />
                                        <ClassicDBLink type="spell" id={8925} rarity="misc">Moonfire (Rank 3)</ClassicDBLink><br />
                                        <ClassicDBLink type="object" id={179548} rarity="misc">A Dusty Tome</ClassicDBLink><br />
                                        <ClassicDBLink type="zone" id={10} rarity="misc">Duskwood</ClassicDBLink><br />
                                        <ClassicDBLink type="faction" id={369} rarity="misc">Gadgetzan</ClassicDBLink>
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
                                    <QuestSection
                                        questChains={[
                                            {
                                                quests: [
                                                    {
                                                        id: "5762",
                                                        name: "Hidden Enemies (Part 1)",
                                                        faction: "horde"
                                                    },
                                                    {
                                                        id: "5727",
                                                        name: "Hidden Enemies (Part 2)",
                                                        faction: "horde"
                                                    },
                                                    {
                                                        id: "5728",
                                                        name: "Hidden Enemies (Part 3)",
                                                        faction: "horde"
                                                    },
                                                    {
                                                        id: "5729",
                                                        name: "Hidden Enemies (Part 4)",
                                                        faction: "horde"
                                                    },
                                                    {
                                                        id: "5730",
                                                        name: "Hidden Enemies (Part 5)",
                                                        faction: "horde"
                                                    }
                                                ],
                                                rewards: [
                                                    {
                                                        id: "15443",
                                                        name: "Kris of Orgrimmar",
                                                        rarity: "uncommon"
                                                    },
                                                    {
                                                        id: "15445",
                                                        name: "Hammer of Orgrimmar",
                                                        rarity: "uncommon"
                                                    },
                                                    {
                                                        id: "15424",
                                                        name: "Axe of Orgrimmar",
                                                        rarity: "uncommon"
                                                    },
                                                    {
                                                        id: "15444",
                                                        name: "Staff of Orgrimmar",
                                                        rarity: "uncommon"
                                                    }
                                                ]
                                            },
                                            {
                                                quests: [
                                                    {
                                                        id: "5722",
                                                        name: "Searching for the Lost Satchel",
                                                        faction: "horde"
                                                    },
                                                    {
                                                        id: "5724",
                                                        name: "Returning the Lost Satchel",
                                                        faction: "horde"
                                                    }
                                                ],
                                                rewards: [
                                                    {
                                                        id: "15452",
                                                        name: "Featherbead Bracers",
                                                        rarity: "uncommon"
                                                    },
                                                    {
                                                        id: "15453",
                                                        name: "Savannah Bracers",
                                                        rarity: "uncommon"
                                                    }
                                                ]
                                            },
                                            {
                                                quests: [
                                                    {
                                                        id: "5761",
                                                        name: "Slaying the Beast",
                                                        faction: "horde"
                                                    }
                                                ]
                                            },
                                            {
                                                quests: [
                                                    {
                                                        id: "5723",
                                                        name: "Testing an Enemy's Strength",
                                                        faction: "horde"
                                                    }
                                                ]
                                            },
                                            {
                                                quests: [
                                                    {
                                                        id: "5725",
                                                        name: "The Power to Destroy...",
                                                        faction: "horde"
                                                    }
                                                ],
                                                rewards: [
                                                    {
                                                        id: "15449",
                                                        name: "Ghastly Trousers",
                                                        rarity: "uncommon"
                                                    },
                                                    {
                                                        id: "15450",
                                                        name: "Dredgemire Leggings",
                                                        rarity: "uncommon"
                                                    },
                                                    {
                                                        id: "15451",
                                                        name: "Gargoyle Leggings",
                                                        rarity: "uncommon"
                                                    }
                                                ]
                                            }
                                        ]} />
                                    <div className="content-heading">Bosses</div>
                                    <BossSection
                                        bosses={[
                                            {
                                                id: "11517",
                                                thumbnailPath: "/res/oggleflint.png",
                                                name: "Oggleflint",
                                                notes: "Can be dangerous when pulled with the trash in his room. Has a cleave."
                                            },
                                            {
                                                id: "11520",
                                                thumbnailPath: "/res/taragaman.png",
                                                name: "Taragaman the Hungerer",
                                                notes: "Has a knockback, so be careful of the lava around him.",
                                                drops: [
                                                    {
                                                        id: "14148",
                                                        rarity: "uncommon",
                                                        name: "Crystalline Cuffs"
                                                    },
                                                    {
                                                        id: "14149",
                                                        rarity: "uncommon",
                                                        name: "Subterranean Cape"
                                                    },
                                                    {
                                                        id: "14145",
                                                        rarity: "uncommon",
                                                        name: "Cursed Felblade"
                                                    }
                                                ]
                                            },
                                            {
                                                id: "11518",
                                                thumbnailPath: "/res/jergosh.png",
                                                name: "Jergosh the Invoker",
                                                drops: [
                                                    {
                                                        id: "14147",
                                                        rarity: "uncommon",
                                                        name: "Cavedweller Bracers"
                                                    },
                                                    {
                                                        id: "14150",
                                                        rarity: "uncommon",
                                                        name: "Robe of Evocation"
                                                    },
                                                    {
                                                        id: "14151",
                                                        rarity: "uncommon",
                                                        name: "Chanting Blade"
                                                    }
                                                ]
                                            },
                                            {
                                                id: "11519",
                                                thumbnailPath: "/res/bazzalan.png",
                                                name: "Bazzalan",
                                                notes: "Can deal a surprising amount of damage but is ultimately a pushover."
                                            }
                                        ]} />
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