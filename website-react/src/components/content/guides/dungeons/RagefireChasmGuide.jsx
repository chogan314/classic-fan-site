import React from 'react';
import Content from '../../content-components/Content';
import HeaderSection from '../../content-components/HeaderSection';
import ClassicDBLink from '../../content-components/ClassicDBLink';
import { ContentHeading, ContentImage, ContentContainer, ContentBody } from '../../content-components/ContentUtils';
import ListSection from '../../content-components/ListSection';
import { QuestSection, QuestChain, Quest, QuestChainRewards } from '../../content-components/QuestSection';
import { BossSection, Boss, BossNotes, BossDrops } from '../../content-components/BossSection';

class RagefireChasmGuide extends Content {
    constructor(props, link) {
        super(props, "guides/dungeons/ragefire_chasm");
    }

    render() {
        return(
            <ContentContainer>
                <HeaderSection
                    title="Example Content Title"
                    thumbnailPath="/res/classic.jpg"
                    author="Example Author"
                    postedDate={this.state.postedDate}
                    editedDate={this.state.editedDate} />
                <ContentBody>
                    <ContentHeading>Introduction</ContentHeading>
                    <p>
                        Ragefire Chasm is a level 13 to 18 instance located in the Cleft of Shadow within Orgrimmar city. This dungeon requires 30 to 50 minutes to complete.
                    </p>
                    <ContentHeading>Tips and Recommendations</ContentHeading>
                    <ListSection
                        type="unordered"
                        spacing="wide"
                        items={[
                            "Your tank and healer should be at least level 15 for this dungeon. DPS can scrape by at level 13, but higher levels are preferred.",
                            "Mages are incredibly helpful. Polymorph is the most reliable CC at this level and can really help reduce the pressure on weaker groups.",
                            "Be careful around the lava. Seriously."
                        ]} />
                    <ContentHeading>Quests</ContentHeading>
                    <QuestSection>
                        <QuestChain>
                            <Quest
                                id="5726"
                                name="Hidden Enemies (Part 1)"
                                faction="horde" />
                            <Quest
                                id="5727"
                                name="Hidden Enemies (Part 2)"
                                faction="horde" />
                            <Quest
                                id="5728"
                                name="Hidden Enemies (Part 3)"
                                faction="horde" />
                            <Quest
                                id="5729"
                                name="Hidden Enemies (Part 4)"
                                faction="horde" />
                            <Quest
                                id="5730"
                                name="Hidden Enemies (Part 5)"
                                faction="horde" />
                            <QuestChainRewards>
                                <ClassicDBLink type="item" id="15443" rarity="uncommon">Kris of Orgrimmar</ClassicDBLink>
                                <ClassicDBLink type="item" id="15445" rarity="uncommon">Hammer of Orgrimmar</ClassicDBLink>
                                <ClassicDBLink type="item" id="15424" rarity="uncommon">Axe of Orgrimmar</ClassicDBLink>
                                <ClassicDBLink type="item" id="15444" rarity="uncommon">Staff of Orgrimmar</ClassicDBLink>
                            </QuestChainRewards>
                        </QuestChain>
                        <QuestChain>
                            <Quest
                                id="5722"
                                name="Searching for the Lost Satchel"
                                faction="horde" />
                            <Quest
                                id="5724"
                                name="Returning the Lost Satchel"
                                faction="horde" />
                            <QuestChainRewards>
                                <ClassicDBLink type="item" id="15452" rarity="uncommon">Featherbead Bracers</ClassicDBLink>
                                <ClassicDBLink type="item" id="15453" rarity="uncommon">Savannah Bracers</ClassicDBLink>
                            </QuestChainRewards>
                        </QuestChain>
                        <QuestChain>
                            <Quest
                                id="5761"
                                name="Slaying the Beast"
                                faction="horde" />
                        </QuestChain>
                        <QuestChain>
                            <Quest
                                id="5723"
                                name="Testing an Enemy's Strength"
                                faction="horde" />
                        </QuestChain>
                        <QuestChain>
                            <Quest
                                id="5725"
                                name="The Power to Destroy..."
                                faction="horde" />
                            <QuestChainRewards>
                                <ClassicDBLink type="item" id="15449" rarity="uncommon">Ghastly Trousers</ClassicDBLink>
                                <ClassicDBLink type="item" id="15450" rarity="uncommon">Dredgemire Leggings</ClassicDBLink>
                                <ClassicDBLink type="item" id="15451" rarity="uncommon">Gargoyle Leggings</ClassicDBLink>
                            </QuestChainRewards>
                        </QuestChain>
                    </QuestSection>
                    <ContentHeading>Bosses</ContentHeading>
                    <BossSection>
                        <Boss id="11517" thumbnailPath="/res/oggleflint.png" name="Oggleflint">
                            <BossNotes>Can be dangerous when pulled with the trash in his room. Has a cleave.</BossNotes>
                        </Boss>
                        <Boss id="11520" thumbnailPath="/res/taragaman.png" name="Taragaman the Hungerer">
                            <BossNotes>Has a knockback, so be careful of the lava around him.</BossNotes>
                            <BossDrops>
                                <ClassicDBLink type="item" id="14148" rarity="uncommon">Crystalline Cuffs</ClassicDBLink>
                                <ClassicDBLink type="item" id="14149" rarity="uncommon">Subterranean Cape</ClassicDBLink>
                                <ClassicDBLink type="item" id="14145" rarity="uncommon">Cursed Felblade</ClassicDBLink>
                            </BossDrops>
                        </Boss>
                        <Boss id="11518" thumbnailPath="/res/jergosh.png" name="Jergosh the Invoker">
                            <BossDrops>
                                <ClassicDBLink type="item" id="14147" rarity="uncommon">Cavedweller Bracers</ClassicDBLink>
                                <ClassicDBLink type="item" id="14150" rarity="uncommon">Robe of Evocation</ClassicDBLink>
                                <ClassicDBLink type="item" id="14151" rarity="uncommon">Chanting Blade</ClassicDBLink>
                            </BossDrops>
                        </Boss>
                        <Boss id="11519" thumbnailPath="/res/bazzalan.png" name="Bazzalan">
                            <BossNotes>Can deal a surprising amount of damage but is ultimately a pushover.</BossNotes>
                        </Boss>
                    </BossSection>
                    <ContentHeading>Walkthrough</ContentHeading>
                    <ContentImage src="/res/map-rfc.png" alt="RFC instance map" />
                    <p>
                        Head south along the red path until you reach a large room filled with troggs. Be careful when clearing this area; there are a few patrolling mobs. Pull mobs with a ranged attack and use the walls to break line of sight with casters to force them to come to you. Don't do any damage or healing until the tank has grouped up the mobs being pulled or you will pull aggro.
                    </p>
                    <p>
                        After the large room has been cleared, you have the option to take the pink path. This leads to the titular satchel that is the turn in location for the <a href="https://classicdb.ch/?quest=5722" target="_blank noopener noreferrer" rel="quest=5722" className="db-link rarity-misc">Searching for the Lost Satchel</a> quest. The satchel is guarded by the miniboss <a href="https://classicdb.ch/?npc=11517" target="_blank noopener noreferrer" className="db-link rarity-misc">Oggleflint</a> and a couple trash mobs that can be pulled without aggroing the miniboss. Oggleflint has a fairly high damage cleave, so tanks should face him away from other members of the group. Despite being a named mob, Oggleflint drops no notable loot. After turning in Searching for the Lost Satchel and picking up <a href="https://classicdb.ch/?quest=5724" target="_blank noopener noreferrer" rel="quest=5724" className="db-link rarity-misc">Returning the Lost Satchel</a>, you can either return the way you came or drop down the nearby ledge. Dropping down the ledge and continuing the pink circuit gives more access to troggs for <a href="https://classicdb.ch/?quest=5723" target="_blank noopener noreferrer" rel="quest=5723" className="db-link rarity-misc">Testing an Enemy's Strength</a>.
                    </p>
                    <p>
                        The blue path should be uneventful until you encounter Searing Blade enemies. Pull these very carefully and be on the look out for patrols. Searing Blade cultists and warlocks have a chance to drop quest items for <a href="https://classicdb.ch/?quest=5725" target="_blank noopener noreferrer" rel="quest=5725" className="db-link rarity-misc">The Power to Destroy...</a> <a href="https://classicdb.ch/?npc=11520" target="_blank noopener noreferrer" className="db-link rarity-misc">Taragaman the Hungerer</a> stands at the center of the cross over the lava. He has a knock back, so tanks should avoid standing with their backs towards the edge of the platform. Taragaman will drop his heart when he dies, the objective of <a href="https://classicdb.ch/?quest=5761" target="_blank noopener noreferrer" rel="quest=5761" className="db-link rarity-misc">Slaying the Beast</a>.
                    </p>
                    <p>
                        You'll find <a href="https://classicdb.ch/?npc=11518" target="_blank noopener noreferrer" className="db-link rarity-misc">Jergosh the Invoker</a> at the end of the green path. He's fairly unremarkable, but you need to take care not to pull too many trash mobs with him. Killing him is one of the objectves of <a href="https://classicdb.ch/?quest=5728" target="_blank noopener noreferrer" rel="quest=5728" className="db-link rarity-misc">Hidden Enemies (part 3)</a>.
                    </p>
                    <p>
                        The other objective of Hidden Enemies, <a href="https://classicdb.ch/?npc=11519" target="_blank noopener noreferrer" className="db-link rarity-misc">Bazzalan</a>, is at the end of the final path. He doesn't drop any notable loot, so he can be ignored if you don't need to complete the quest. You can take a shortcut to the ramp that leads to him by jumping up the lip of the lava pool that was near Jergosh. He does slightly more damage than the bosses you've fought so far, but isn't particularly dangerous.
                    </p>
                </ContentBody>
            </ContentContainer>
        );
    }
}

export default RagefireChasmGuide;