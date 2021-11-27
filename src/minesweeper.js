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
}

module.exports = {
  MineSweeper,
};