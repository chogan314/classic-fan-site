import React, { Component } from 'react';

class GuideType extends Component {
    render() {
        return(
            <div>
                <a href="guides">
                    <div className="entry-image-container" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                        <img className="entry-image" src={this.props.data.thumbnail_path} alt="thumbnail" />
                        <div className="entry-image-overlay"></div>
                    </div>
                </a>
                <div className="entry-title heading"><a href="guides">{this.props.data.type + " Guides"}</a></div>
                <div className="entry-preview">{this.props.data.description}</div>
            </div>
        );
    }
}

function mouseEnter(event) {
    var imageOverlay = event.currentTarget.getElementsByClassName("entry-image-overlay")[0];
    imageOverlay.classList.add("entry-image-overlay-highlight");
}

function mouseLeave(event) {
    var imageOverlay =  event.currentTarget.getElementsByClassName("entry-image-overlay")[0];
    imageOverlay.classList.remove("entry-image-overlay-highlight");
}

export default GuideType;