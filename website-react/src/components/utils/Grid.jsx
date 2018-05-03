import React, { Component } from 'react';
import '../../style/grid.css';

class Grid extends Component {
    render() {
        return(
            <div id="grid-section">
                <div className="section-wrapper">
                    <div id="grid-container">
                        <div id="grid">
                            { this.props.children }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Grid;