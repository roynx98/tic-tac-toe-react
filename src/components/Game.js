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
      isXNext: false,
      stepNumber: 0
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];

    if (current.squares[i] || calculateWinner(current.squares)) {
      return;
    }

    const newSquares = current.squares.slice();

    newSquares[i] = this.state.isXNext ? 'X' : 'O';

    this.setState({
      history: history.concat({ squares: newSquares }),
      isXNext: !this.state.isXNext,
      stepNumber: history.length
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      isXNext: (step % 2) === 1,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((_, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status = `Next player: ${this.state.isXNext ? 'X' : 'O'}`;
    if (winner) {
      status = `Winner: ${winner}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

}
