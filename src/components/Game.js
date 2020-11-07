import { Board } from './Board';
import React from 'react';
import { calculateWinner } from '../helpers/calculateWinner';

export class Game extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      isXNext: false
    };
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];

    if (current.squares[i] || calculateWinner(current.squares)) {
      return;
    }

    const newHistory = this.state.history.slice();
    const newSquares = current.squares.slice();

    newSquares[i] = this.state.isXNext ? 'X' : 'O';

    this.setState({
      history: newHistory.concat({ squares: newSquares }),
      isXNext: !this.state.isXNext
    });
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    let status = `Next player: ${this.state.isXNext ? 'X' : 'O'}`;
    if (winner) {
      status = `Winner: ${winner}`;
    }

    return (
      <>
        <div className="game">
          <div className="game-board">
            <Board 
              squares={current.squares}
              onClick={i => this.handleClick(i)} />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </>
    );
  }

}
