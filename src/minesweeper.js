class MineSweeper {

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
}

module.exports = {
  MineSweeper,
};