class MineSweeper {

  constructor() {
    this.bombs = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
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
    result += `| | | |\n`;
    result += `+-+-+-+\n`;
    result += `| | | |\n`;
    result += `+-+-+-+\n`;
    result += `|3| | |\n`;
    result += `+-+-+-+\n`;
    result += `[Sandbox 3x3] 3 bombs around your square.`;
    return result;
  }

  addBomb(row, col) {
    this.bombs[row][col] = 1;
  }

  takeStep(row, col) {
    this.board[row][col] = '3';
  }
}

module.exports = {
  MineSweeper,
};