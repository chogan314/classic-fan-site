import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Mesh2 from '../../scripts/mesh2d.js';

function EntryTypeOverlay(props) {
    return(
        <div className="entry-type-overlay">
            <div className="entry-type-name heading">{props.entry_type_name}</div>
            <img src={props.entry_type_icon_path} alt={props.entry_type_name + " icon"} />
        </div>
    );
}

class GridEntry extends Component {
    render() {
        return(
            <div className={"grid-entry " + this.props.entry_type_class}>
                <Link to={this.props.link_to}>
                    <div className="entry-image-container" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                        <img className="entry-image" src={this.props.thumbnail_path} alt="thumbnail" />
                        <div className="entry-image-overlay"></div>

                        {this.props.entry_type_name !== null &&
                        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMin slice" className="entry-image-polygon-overlay">
                            <polygon points="100,0 100,38 62,0 62,0" />
                        </svg>}
                        
                        {this.props.entry_type_name !== null &&
                        <EntryTypeOverlay entry_type_name = {this.props.entry_type_name} entry_type_icon_path = {this.props.entry_type_icon_path} />}
                    </div>
                </Link>

                {this.props.author !== null && this.props.posted_at !== null &&
                <div className="entry-details-row">
                    <div className="entry-details-author">{this.props.author}</div>
                    <div className="entry-details-date">{this.props.posted_at}</div>
                </div>}

                <div className="entry-title heading">{this.props.title}</div>
                <div className="entry-description">{this.props.description}</div>
            </div>
        );
    }
}

class PolygonAnimationListenerContainer {
    constructor() {
        this.incrementingID = 0;
        this.idPrefix = "animID";
        this.animationListeners = {};
    }

    registerListener(polygonAnimationListener) {
        var pal = polygonAnimationListener;
        var id = pal.polygon.getAttribute("id");
        if (!id) {
            this.incrementingID++;
            id = this.idPrefix + this.incrementingID;
            pal.polygon.setAttribute("id", id);
        }
        if (this.animationListeners[id]) {
            this.animationListeners[id].interrupt();
        }
        this.animationListeners[id] = pal;
    }

    removeListener(polygonAnimationListener) {
        var pal = polygonAnimationListener;
        var id = pal.polygon.getAttribute("id");
        this.animationListeners[id] = null;
    }
}

class PolygonAnimationListener {
    constructor(polygon, polygonAnimationListenerContainer, onStart, onFinish, onInterrupt) {
        this.polygon = polygon;
        this.palContainer = polygonAnimationListenerContainer;
        this.onStart = onStart;
        this.onFinish = onFinish;
        this.onInterrupt = onInterrupt;
    }

    start(intervalID) {
        this.intervalID = intervalID;
        this.palContainer.registerListener(this);
        if (this.onStart) {
            this.onStart();
        }
    }

    update(polygonCoords) {
        this.polygon.setAttribute("points", polygonCoords);
    }

    end() {
        clearInterval(this.intervalID);
        this.palContainer.removeListener(this);
    }

    finish() {
        this.end();
        if (this.onFinish) {
            this.onFinish();
        }
    }

    interrupt() {
        this.end();
        if (this.onInterrupt) {
            this.onInterrupt();
        }
    }
}

const palContainer = new PolygonAnimationListenerContainer();
const initialTriangleOverlayPoints = "100,0 100,38 62,0 62,0";
const articleTriangleOverlayPoints = "100,0 100,21.5 45,21.5 45,0";

function animateOverlay(polygon, targetPointsString, initialPointsString, time, onStart, onFinish, onInterrupt) {
    var polygonMesh = new Mesh2(polygon.getAttribute("points"));
    var targetMesh = new Mesh2(targetPointsString);
    var initialMesh = new Mesh2(initialPointsString);

    polygonMesh.morphTo(targetMesh, initialMesh, time, new PolygonAnimationListener(polygon, palContainer, onStart, onFinish, onInterrupt));
}

function mouseEnter(event) {
    var imageOverlay = event.currentTarget.getElementsByClassName("entry-image-overlay")[0];
    var polygon = event.currentTarget.getElementsByClassName("entry-image-polygon-overlay")[0].getElementsByTagName("polygon")[0];
    var typeName = event.currentTarget.getElementsByClassName("entry-type-name")[0];    
    
    var overlayPoints = articleTriangleOverlayPoints;

    imageOverlay.classList.add("entry-image-overlay-highlight");
    animateOverlay(polygon, overlayPoints, initialTriangleOverlayPoints, 60, null, () => typeName.style.visibility = "visible");
}

function mouseLeave(event) {
    var imageOverlay =  event.currentTarget.getElementsByClassName("entry-image-overlay")[0];
    var polygon = event.currentTarget.getElementsByClassName("entry-image-polygon-overlay")[0].getElementsByTagName("polygon")[0];
    var typeName = event.currentTarget.getElementsByClassName("entry-type-name")[0];    
    
    var overlayPoints = articleTriangleOverlayPoints;

    imageOverlay.classList.remove("entry-image-overlay-highlight");
    animateOverlay(polygon, initialTriangleOverlayPoints, overlayPoints, 40, () => typeName.style.visibility = "hidden");
}

export default GridEntry;