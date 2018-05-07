import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Mesh2 from '../../scripts/mesh2d.js';
import PolygonAnimationListener, { PolygonAnimationListenerContainer } from '../../scripts/polygonAnimationListener.js';

function EntryTypeOverlay(props) {
    return(
        <div className="entry-type-overlay">
            <div className="entry-type-name heading">{props.entry_type_name}</div>
            <img src={props.entry_type_icon_path} alt={props.entry_type_name + " icon"} />
        </div>
    );
}

class GridEntry extends Component {
    constructor(props) {
        super(props);
        this.palContainer = new PolygonAnimationListenerContainer();
        this.initialOverlayPoints = "100,0 100,38 62,0 62,0";
    }

    animateOverlay(polygon, targetPointsString, initialPointsString, time, onStart, onFinish, onInterrupt) {
        var polygonMesh = new Mesh2(polygon.getAttribute("points"));
        var targetMesh = new Mesh2(targetPointsString);
        var initialMesh = new Mesh2(initialPointsString);

        polygonMesh.morphTo(targetMesh, initialMesh, time, new PolygonAnimationListener(polygon, this.palContainer, onStart, onFinish, onInterrupt));
    }

    w(typeOverlayWidth) {
        return 0.0002 * Math.pow(typeOverlayWidth, 2) - 0.677 * typeOverlayWidth + 100; // seriously
    }

    mouseEnter(event) {
        var imageOverlay = event.currentTarget.getElementsByClassName("entry-image-overlay")[0];
        imageOverlay.classList.add("entry-image-overlay-highlight");

        if (!this.props.entry_type_name) {
            return;
        }

        var polygon = event.currentTarget.getElementsByClassName("entry-image-polygon-overlay")[0].getElementsByTagName("polygon")[0];
        var typeName = event.currentTarget.getElementsByClassName("entry-type-name")[0];

        var typeOverlayWidth = event.currentTarget.getElementsByClassName("entry-type-overlay")[0].clientWidth;
        var expandedWidth = this.w(typeOverlayWidth);
        var expandedPoints = "100,0 100,21.5, " + expandedWidth + ",21.5 " + expandedWidth + ",0";

        this.animateOverlay(polygon, expandedPoints, this.initialOverlayPoints, 60, null, () => typeName.style.visibility = "visible");
    }

    mouseLeave(event) {
        var imageOverlay =  event.currentTarget.getElementsByClassName("entry-image-overlay")[0];
        imageOverlay.classList.remove("entry-image-overlay-highlight");        

        if (!this.props.entry_type_name) {
            return;
        }

        var polygon = event.currentTarget.getElementsByClassName("entry-image-polygon-overlay")[0].getElementsByTagName("polygon")[0];
        var typeName = event.currentTarget.getElementsByClassName("entry-type-name")[0];
        
        var typeOverlayWidth = event.currentTarget.getElementsByClassName("entry-type-overlay")[0].clientWidth;
        var expandedWidth = this.w(typeOverlayWidth);
        var expandedPoints = "100,0 100,21.5, " + expandedWidth + ",21.5 " + expandedWidth + ",0";

        this.animateOverlay(polygon, this.initialOverlayPoints, expandedPoints, 40, () => typeName.style.visibility = "hidden");
    }

    render() {
        return(
            <div className={this.props.entry_type_class ? "grid-entry " + this.props.entry_type_class : "grid-entry"}>
                <Link to={this.props.link_to ? this.props.link_to : "/"}>
                    <div className="entry-image-container" onMouseEnter={event => this.mouseEnter(event)} onMouseLeave={event => this.mouseLeave(event)}>
                        <img className="entry-image" src={this.props.thumbnail_path} alt="thumbnail" />
                        <div className="entry-image-overlay"></div>

                        {this.props.entry_type_name ?
                        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMin slice" className="entry-image-polygon-overlay">
                            <polygon points="100,0 100,38 62,0 62,0" />
                        </svg> : null}

                        {this.props.entry_type_name ?
                        <EntryTypeOverlay entry_type_name = {this.props.entry_type_name} entry_type_icon_path = {this.props.entry_type_icon_path} /> : null}
                    </div>
                </Link>

                <div className="entry-details-row">
                    {this.props.author ? <div className="entry-details-author">{this.props.author}</div> : null}
                    {this.props.posted_at ? <div className="entry-details-date">{this.props.posted_at}</div> : null}
                </div>

                <div className="entry-title heading">{this.props.title}</div>
                <div className="entry-description">{this.props.description}</div>
            </div>
        );
    }
}

export default GridEntry;