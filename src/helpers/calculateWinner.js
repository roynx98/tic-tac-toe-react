export function calculateWinner(board) {
    const possitions = [
      // Horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonal
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let p of possitions) {
      if (board[p[0]] && board[p[0]] === board[p[1]] &&
        board[p[0]] === board[p[2]]) {
        return board[p[0]];
      }
    }
    return null;
  }
