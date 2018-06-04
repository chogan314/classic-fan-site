import React, { Component } from 'react';

class HeaderSection extends Component {
    render() {
        return(
            <div className="content-header-section">
                <div className="content-title">{this.props.title}</div>
                <div className="content-thumbnail-container">
                    <img src={this.props.thumbnailPath} alt="content thumbnail" className="content-thumbnail" />
                </div>
                <div className="content-details-container">
                    <div className="content-author">{this.props.author}</div>
                    <div className="content-date">{this.props.date}</div>
                </div>
            </div>
        );
    }
}

export default HeaderSection;