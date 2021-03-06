class MineSweeper {

  constructor() {
    this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    this.bombs = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    this.setVariables();
  }

  setVariables() {
    this.roundResult = '';
    this.gameOver = false;
    this.BOMB = 'X';
    this.FLAG = '*';
    this.NO_NEIGHBOURS = '_';
    this.EMPTY = ' ';
    this.DIMENSION = 3;
  }

  getGameBoardAndCreationLabels() {
    let result = this.getGameBoard();
    result += `${this.sandbox()} Game created`;
    return result;
  }

  getFinalResult() {
    let result = this.getGameBoard();
    if (this.gameOver) {
      result += `${this.sandbox()} BOOM! – Game Over.`;
    }
    if (this.cleared()) {
      result += `${this.sandbox()} the land is cleared! GOOD JOB!`;
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
    if (this.checkIfGameOver(row, col)) {
      return;
    }
    this.checkIfHasBombs(row, col);
    this.checkIfNoBomb(row, col);
  }

  checkIfGameOver(row, col) {
    if (this.bombs[row][col]) {
      this.board[row][col] = this.BOMB;
      this.gameOver = true;
      return true;
    }
  }

  checkIfHasBombs(row, col) {
    let numberOfBombs = this.numberOfBombs(row, col);
    if (numberOfBombs > 0 && !this.cleared()) {
      this.board[row][col] = numberOfBombs;
      this.roundResult = `${this.sandbox()} ${numberOfBombs} bombs around your square.`;
    }
  }

  checkIfNoBomb(row, col) {
    if (this.numberOfBombs(row, col) === 0) {
      this.board[row][col] = this.NO_NEIGHBOURS;
      this.checkNeighbours(row, col);
    }
  }

  numberOfBombs(row, col) {
    let numberOfBombs = 0;
    for (let i = 0; i < this.DIMENSION; i++) {
      for (let j = 0; j < this.DIMENSION; j++) {
        if (this.bombs[row + (i - 1)] && this.bombs[row + (i - 1)][col + (j - 1)]) {
          numberOfBombs++;
        }
      }
    }
    return numberOfBombs;
  }

  checkNeighbours(row, col) {
    for (let i = Math.max(row - 1, 0); i <= Math.min(row + 1, this.DIMENSION - 1); i++) {
      for (let j = Math.max(col - 1, 0); j <= Math.min(col + 1, this.DIMENSION - 1); j++) {
        if (this.board[i][j] === this.EMPTY && !this.bombs[i][j]) {
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
    this.roundResult = `${this.sandbox()} Square flagged as bomb.`;
  }

  sandbox() {
    return `[Sandbox ${this.DIMENSION}x${this.DIMENSION}]`;
  }

  searchForFreeCell() {
    let row = 0;
    let col = 0;
    do {
      row = Math.floor(Math.random() * this.DIMENSION);
      col = Math.floor(Math.random() * this.DIMENSION);
    } while (this.board[row][col] !== this.EMPTY);
    return [row, col];
  }

  cleared() {
    for (let i = 0; i < this.DIMENSION; i++) {
      for (let j = 0; j < this.DIMENSION; j++) {
        if (this.board[i][j] === this.EMPTY && !this.bombs[i][j]) {
          return false;
        }
      }
    }
    return true;
  }
}

module.exports = {
  MineSweeper,
};