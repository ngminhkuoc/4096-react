import React, { Component } from "react";

const noOfRows = 4;
const noOfColumns = 4;

export default class Container extends Component {
    renderColumns() {
        let columns = [];
        for (var i = 0; i < noOfColumns; i++) {
            let column = (<div className="grid-cell" />);
            columns.push(column);
        }
        return columns;
    }

    renderCells() {
        let rows = [];
        for (var i = 0; i < noOfRows; i++) {
            let row = (<div className="grid-row">
                {this.renderColumns()}
            </div>);
            rows.push(row);
        }
        return rows;
    }

    render() {
        return (
            <div className="game-container">
                <div className="game-message">
                    <p />
                    <div className="lower">
                        <button className="keep-playing-button">Keep going</button>
                        <button className="retry-button">Try again</button>
                    </div>
                </div>
                <div className="grid-container">
                    {this.renderCells()}
                </div>
                <div className="tile-container">
                </div>
            </div>
        )
    }
}