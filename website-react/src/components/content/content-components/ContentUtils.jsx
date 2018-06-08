import React from 'react';
import SiteContainer from '../../site-container/SiteContainer';

function ContentHeading(props) {
    return(
        <div className="content-heading">
            {props.children}
        </div>
    );
}

function ContentQuote(props) {
    return(
        <div className="content-quote">
            {props.children}
        </div>
    );
}

function ContentImage(props) {
    return (
        <img src={props.src} alt={props.alt} className="content-insert-image" />
    );
}

function ContentContainer(props) {
    return(
        <SiteContainer active={props.active}>
            <div id="main-content">
                <div id="content-section">
                    <div className="section-wrapper">
                        <div className="content-container">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </SiteContainer>
    );
}

function ContentBody(props) {
    return(
        <div className="content-body">
            {props.children}
        </div>
    );
}

export { ContentHeading, ContentQuote, ContentImage, ContentContainer, ContentBody };