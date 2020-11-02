import React from 'react';

import { Square } from './Square';

export class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isXNext: true
    };
  }

  handleClick(i) {
    // Make a copy of the array
    const squares = this.state.squares.slice();

    squares[i] = this.state.isXNext ? 'X' : 'O';
    this.setState({
      squares,
      isXNext: !this.state.isXNext
    });
  }

  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]} 
        onClick={() => {this.handleClick(i)}}
        />
    );
  }

  render() {
    const status = `Next player: ${this.state.isXNext ? 'X' : 'O'}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}