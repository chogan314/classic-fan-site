import React from 'react';

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

export { ContentHeading, ContentQuote, ContentImage };