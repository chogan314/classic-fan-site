import React, { Component } from 'react';

function UnorderedList(props) {
    return(
        <ul class={props.spacing === "wide" ? "wide-spaced-list" : ""}>
            {props.items.map(item =>
                <li>{item}</li>
            )}
        </ul>
    );
}

function OrderedList(props) {
    return(
        <ol class={props.spacing === "wide" ? "wide-spaced-list" : ""}>
            {props.items.map(item =>
                <li><div>{item}</div></li>
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