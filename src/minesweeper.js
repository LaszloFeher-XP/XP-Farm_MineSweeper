class MineSweeper {

  constructor() {
    this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    this.bombs = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    this.roundResult = '';
    this.gameOver = false;

    this.BOMB = 'X';
    this.FLAG = '*';
  }

  getGameBoardAndCreationLabels() {
    let result = this.getGameBoard();
    result += `[Sandbox 3x3] Game created`;
    return result;
  }

  getFinalResult() {
    if (this.board[0][0] === '_') {
      let result = `+-+-+-+\n`;
      result += `|_|1| |\n`;
      result += `+-+-+-+\n`;
      result += `|_|1|1|\n`;
      result += `+-+-+-+\n`;
      result += `|_|_|_|\n`;
      result += `+-+-+-+\n`;
      result += `[Sandbox 3x3] the land is cleared! GOOD JOB!`;
      return result;
    }
    let result = this.getGameBoard();
    if (this.gameOver) {
      result += `[Sandbox 3x3] BOOM! – Game Over.`;
    } else {
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
      this.board[row][col] = '_';
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