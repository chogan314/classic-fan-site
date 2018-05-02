import React, { Component } from 'react';

class GuideType extends Component {
    render() {
        return(
            <div>
                <a href="guides">
                    <div className="entry-image-container">
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

export default GuideType;