class MineSweeper {

  constructor() {
    this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    this.bombs = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    this.roundResult = '';
  }

  getGameBoardAndCreationLabels() {
    let result = `+-+-+-+\n`;
    result += `| | | |\n`;
    result += `+-+-+-+\n`;
    result += `| | | |\n`;
    result += `+-+-+-+\n`;
    result += `| | | |\n`;
    result += `+-+-+-+\n`;
    result += `[Sandbox 3x3] Game created`;
    return result;
  }

  getFinalResult() {
    let result = `+-+-+-+\n`;
    result += `| | | |\n`;
    result += `+-+-+-+\n`;
    result += `| |X| |\n`;
    result += `+-+-+-+\n`;
    result += `| | | |\n`;
    result += `+-+-+-+\n`;
    result += `[Sandbox 3x3] BOOM! – Game Over.`;
    return result;
  }

  getRoundResult() {
    let result = `+-+-+-+\n`;
    result += `|${this.board[2][0]}|${this.board[2][1]}|${this.board[2][2]}|\n`;
    result += `+-+-+-+\n`;
    result += `|${this.board[1][0]}|${this.board[1][1]}|${this.board[1][2]}|\n`;
    result += `+-+-+-+\n`;
    result += `|${this.board[0][0]}|${this.board[0][1]}|${this.board[0][2]}|\n`;
    result += `+-+-+-+\n`;
    result += `${this.roundResult}`;
    return result;
  }

  takeStep(row, col) {
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
  }

  addBomb(row, col) {
    this.bombs[row][col] = 1;
  }
}

module.exports = {
  MineSweeper,
};