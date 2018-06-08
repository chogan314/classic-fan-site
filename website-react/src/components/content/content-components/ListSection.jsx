import React, { Component } from 'react';

function UnorderedList(props) {
    return(
        <ul className={props.spacing === "wide" ? "wide-spaced-list" : ""}>
            {props.items.map(item =>
                <li key={item}>{item}</li>
            )}
        </ul>
    );
}

function OrderedList(props) {
    return(
        <ol className={props.spacing === "wide" ? "wide-spaced-list" : ""}>
            {props.items.map(item =>
                <li><div key={item}>{item}</div></li>
            )}
        </ol>
    );
}

class ListSection extends Component {
    render() {
        return(
            <div className="content-body-internal">
                {this.props.type === "ordered" ?
                    <OrderedList items={this.props.items} spacing={this.props.spacing} /> :
                    <UnorderedList items={this.props.items} spacing={this.props.spacing} />}
            </div>
        );
    }
}

export default ListSection;