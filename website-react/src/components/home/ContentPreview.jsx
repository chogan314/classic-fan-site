import React, { Component } from 'react';
import Mesh2 from '../../scripts/mesh2d.js'

function ContentTypeRowOverlay(props) {
    switch (props.contentType) {
        case "NEWS":
            return (
                <div className="entry-type-row-overlay entry-type-news">
                    <div className="entry-type-name heading">News</div>
                    <img src="res/folded-newspaper-dark-green.png" alt="news icon" />
                </div>
            );
        case "ARTICLE":
            return (
                <div className="entry-type-row-overlay entry-type-article">
                    <div className="entry-type-name heading">Article</div>
                    <img src="res/writing-blue.png" alt="article icon" />
                </div>
            );
        default:
            return (
                <div className="entry-type-row-overlay entry-type-guide">
                    <div className="entry-type-name heading">Guide</div>
                    <img src="res/tower-purple.png" alt="guide icon" />
                </div>
            );
    }
}

function contentPreviewclassName(contentType) {
    switch (contentType) {
        case "NEWS":
            return "grid-entry grid-entry-news";
        case "ARTICLE":
            return "grid-entry grid-entry-article";
        default:
            return "grid-entry grid-entry-guide";
    }
}

const initialTriangleOverlayPoints = "100,0 100,38 62,0 62,0";
const articleTriangleOverlayPoints = "100,0 100,21.5 45,21.5 45,0";
const newsTriangleOverlayPoints = "100,0 100,21.5 49.5,21.5 49.5,0";
const guideTriangleOverlayPoints = "100,0 100,21.5 48,21.5 48,0";

function getArticleType(element) {
    var type = "unknown";

    if (element.parentNode.classList.contains("entry-type-article")) {
        type = "article";
    } else if (element.parentNode.classList.contains("entry-type-news")) {
        type = "news";
    } else if (element.parentNode.classList.contains("entry-type-guide")) {
        type = "guide";
    }

    return type;
}

function polygonAnimationListenerContainer() {
    var self = this;
    this.incrementingID = 0;
    this.idPrefix = "animID";
    this.animationListeners = {};

    this.registerListener = function(pal) {
        var id = pal.polygon.getAttribute("id");
        if (!id) {
            self.incrementingID++;
            id = self.idPrefix + self.incrementingID;
            pal.polygon.setAttribute("id", id);
        }
        if (self.animationListeners[id]) {
            self.animationListeners[id].interrupt();
        }
        self.animationListeners[id] = pal;
    }

    this.removeListener = function(pal) {
        var id = pal.polygon.getAttribute("id");
        self.animationListeners[id] = null;
    }
}

var palContainer = new polygonAnimationListenerContainer();

function animateOverlay(polygon, targetPointsString, initialPointsString, time, onStart, onFinish, onInterrupt) {
    var polygonMesh = new Mesh2(polygon.getAttribute("points"));
    var targetMesh = new Mesh2(targetPointsString);
    var initialMesh = new Mesh2(initialPointsString);

    var polygonAnimationListener = function() {
        var self = this;
        this.polygon = polygon;

        this.start = function(intervalID) {
            self.intervalID = intervalID;
            palContainer.registerListener(self);
            if (self.onStart) {
                self.onStart();
            }
        }

        this.update = function(polygonCoords) {
            self.polygon.setAttribute("points", polygonCoords);
        }

        this.end = function() {
            clearInterval(this.intervalID);
            palContainer.removeListener(self);
        }

        this.finish = function() {
            self.end();
            if (self.onFinish) {
                self.onFinish();
            }
        }

        this.interrupt = function() {
            self.end();
            if (self.onInterrupt) {
                self.onInterrupt();
            }
        }

        this.onStart = onStart;
        this.onFinish = onFinish;
        this.onInterrupt = onInterrupt;
    }

    polygonMesh.morphTo(targetMesh, initialMesh, time, new polygonAnimationListener());
}

function mouseEnter(event) {
    var imageOverlay = event.currentTarget.getElementsByClassName("entry-image-overlay")[0];
    var polygon = event.currentTarget.getElementsByClassName("entry-image-triangle-overlay")[0].getElementsByTagName("polygon")[0];
    var typeName = event.currentTarget.getElementsByClassName("entry-type-name")[0];

    var contentType = getArticleType(typeName);
    var overlayPoints = articleTriangleOverlayPoints;

    if (contentType === "news") {
        overlayPoints = newsTriangleOverlayPoints;
    } else if (contentType === "guide") {
        overlayPoints = guideTriangleOverlayPoints;
    }

    imageOverlay.classList.add("entry-image-overlay-highlight");
    animateOverlay(polygon, overlayPoints, initialTriangleOverlayPoints, 60, null, () => typeName.style.display = "block");
}

function mouseLeave(event) {
    var imageOverlay = event.currentTarget.getElementsByClassName("entry-image-overlay")[0];
    var polygon = event.currentTarget.getElementsByClassName("entry-image-triangle-overlay")[0].getElementsByTagName("polygon")[0];
    var typeName = event.currentTarget.getElementsByClassName("entry-type-name")[0];

    var articleType = getArticleType(typeName);
    var expandedOverlayPoints = articleTriangleOverlayPoints;

    if (articleType === "news") {
        expandedOverlayPoints = newsTriangleOverlayPoints;
    } else if (articleType === "guide") {
        expandedOverlayPoints = guideTriangleOverlayPoints;
    }

    imageOverlay.classList.remove("entry-image-overlay-highlight");
    animateOverlay(polygon, initialTriangleOverlayPoints, expandedOverlayPoints, 40);
    typeName.style.display = "none";
}

class ContentPreview extends Component {
    render() {
        return(
            <div className={contentPreviewclassName(this.props.data.type)}>
                <a href="index">
                    <div className="entry-image-container" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                        <img className="entry-image" src={this.props.data.thumbnail_path} alt="thumbnail" />
                        <div className="entry-image-overlay"></div>
                        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMin slice" className="entry-image-triangle-overlay">
                            <polygon points="100,0 100,38 62,0 62,0" />
                        </svg>
                        <ContentTypeRowOverlay contentType={this.props.data.type} />
                    </div>
                </a>
                <div className="entry-details-row">
                    <div className="entry-details-author">{this.props.data.author}</div>
                    <div className="entry-details-date">{this.props.data.posted_at}</div>
                </div>
                <div className="entry-title heading"><a href="index">{this.props.data.title}</a></div>
                <div className="entry-preview">{this.props.data.description}</div>
            </div>
        );
    }
}

export default ContentPreview;