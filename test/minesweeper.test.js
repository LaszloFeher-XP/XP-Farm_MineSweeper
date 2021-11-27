const { MineSweeper } = require('../src/minesweeper');

describe('Mine Sweeper Kata', () => {

  describe('US1 - UAT Scenarios', () => {

    describe('1 -  Game Board Creation phase', () => {
      test('Create empty board', () => {
        const mineSweeper = new MineSweeper();
        let expected = `+-+-+-+\n`;
        expected += `| | | |\n`;
        expected += `+-+-+-+\n`;
        expected += `| | | |\n`;
        expected += `+-+-+-+\n`;
        expected += `| | | |\n`;
        expected += `+-+-+-+\n`;
        expected += `[Sandbox 3x3] Game created`;
        expect(mineSweeper.getGameBoardAndCreationLabels()).toStrictEqual(expected);
      });
    });
  });
});

