class MineSweeper {

  constructor() {
    this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    this.bombs = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    this.roundResult = '';
    this.gameOver = false;

    this.BOMB = 'X';
    this.FLAG = '*';
    this.NO_NEIGHBOURS = '_';
  }

  getGameBoardAndCreationLabels() {
    let result = this.getGameBoard();
    result += `[Sandbox 3x3] Game created`;
    return result;
  }

  getFinalResult() {
    let result = this.getGameBoard();
    if (this.gameOver) {
      result += `[Sandbox 3x3] BOOM! – Game Over.`;
    }
    if (!this.gameOver) {
      result += `[Sandbox 3x3] the land is cleared! GOOD JOB!`;
    }
    return result;
  }

  getRoundResult() {
    return `${this.getGameBoard()}${this.roundResult}`;
  }

  getGameBoard() {
    let result = `+-+-+-+\n`;
    result += `|${this.board[2][0]}|${this.board[2][1]}|${this.board[2][2]}|\n`;
    result += `+-+-+-+\n`;
    result += `|${this.board[1][0]}|${this.board[1][1]}|${this.board[1][2]}|\n`;
    result += `+-+-+-+\n`;
    result += `|${this.board[0][0]}|${this.board[0][1]}|${this.board[0][2]}|\n`;
    result += `+-+-+-+\n`;
    return result;
  }

  takeStep(row, col) {
    if (this.bombs[row][col]) {
      this.board[row][col] = this.BOMB;
      this.gameOver = true;
      return;
    }

    let numberOfBombs = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (this.bombs[row + i] && this.bombs[row + i][col + j]) {
          numberOfBombs++;
        }
      }
    }
    if (numberOfBombs > 0) {
      this.board[row][col] = numberOfBombs;
      this.roundResult = `[Sandbox 3x3] ${numberOfBombs} bombs around your square.`;
    }
    if (numberOfBombs === 0) {
      this.board[row][col] = this.NO_NEIGHBOURS;
      this.checkNeighbours(row, col);
    }
  }

  checkNeighbours(row, col) {
    for (let i = Math.max(row - 1, 0); i <= Math.min(row + 1, 2); i++) {
      for (let j = Math.max(col - 1, 0); j <= Math.min(col + 1, 2); j++) {
        if (this.board[i][j] === ' ' && !this.bombs[i][j]) {
          this.takeStep(i, j);
        }
      }
    }
  }

  addBomb(row, col) {
    this.bombs[row][col] = 1;
  }

  flagSquare(row, col) {
    this.board[row][col] = this.FLAG;
    this.roundResult = `[Sandbox 3x3] Square flagged as bomb.`;
  }
}

module.exports = {
  MineSweeper,
};