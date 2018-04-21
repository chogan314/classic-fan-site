import React, { Component } from 'react';

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

class ContentPreview extends Component {
    render() {
        return(
            <div className={contentPreviewclassName(this.props.type)}>
                <div className="entry-image-container">
                    <img className="entry-image" src={this.props.thumbnail_path} alt="thumbnail" />
                    <div className="entry-image-overlay"></div>
                    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMin slice" className="entry-image-triangle-overlay">
                        <polygon points="100,0 100,38 62,0 62,0" />
                    </svg>
                    <ContentTypeRowOverlay contentType={this.props.type} />
                </div>
                <div className="entry-details-row">
                    <div className="entry-details-author">{this.props.author}</div>
                    <div className="entry-details-date">{this.props.posted_at}</div>
                </div>
                <div className="entry-title heading">{this.props.title}</div>
                <div className="entry-preview">{this.props.description}</div>
            </div>
        );
    }
}

export default ContentPreview;