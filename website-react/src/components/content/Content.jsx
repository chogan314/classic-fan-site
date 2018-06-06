import { Component } from 'react';
import Getter from '../../scripts/getter.js';
import DateUtils from '../../scripts/dateUtils.js';
import '../../style/content.css';

class Content extends Component {
    constructor(props, link) {
        super(props);
        this.link = link;
        this.getter = new Getter("/php/get_content_data");
        this.dateUtils = new DateUtils();
        this.state = {
            postedDate: "January 1, 1970",
            editedDate: null
        };
    }

    get() {
        this.getter.get({ link: this.link }, onComplete);
        var self = this;

        function onComplete(dbData) {
            self.setState({
                postedDate: self.dateUtils.dateToString(self.dateUtils.dateFromMySQL(dbData.posted_at)),
                editedDate: self.dateUtils.dateToString(self.dateUtils.dateFromMySQL(dbData.edited_at))
            });
        }
    }

    componentDidMount() {
        // this.get();

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
}

export default Content;