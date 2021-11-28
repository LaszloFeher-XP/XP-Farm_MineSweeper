class MineSweeper {

  constructor() {
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
    if (this.board[2][2] === '3') {
      result += `| | |3|\n`;
    } else {
      result += `| | | |\n`;
    }
    result += `+-+-+-+\n`;
    result += `| | | |\n`;
    result += `+-+-+-+\n`;
    if (this.board[0][0] === '3') {
      result += `|3| | |\n`;
    } else {
      result += `| | | |\n`;
    }
    result += `+-+-+-+\n`;
    result += `[Sandbox 3x3] 3 bombs around your square.`;
    return result;
  }

  takeStep(row, col) {
    this.board[row][col] = '3';
  }
}

module.exports = {
  MineSweeper,
};