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

    describe('2 - Game Over - Step on a bomb on 1;1', () => {
      test('GIVEN a board with bomb on 1,1 WHEN takeStep to 1,1 THEN Game Over', () => {
        const mineSweeper = new MineSweeper();
        let expected = `+-+-+-+\n`;
        expected += `| | | |\n`;
        expected += `+-+-+-+\n`;
        expected += `| |X| |\n`;
        expected += `+-+-+-+\n`;
        expected += `| | | |\n`;
        expected += `+-+-+-+\n`;
        expected += `[Sandbox 3x3] BOOM! – Game Over.`;
        expect(mineSweeper.getFinalResult()).toStrictEqual(expected);
      });
    });

  });
});

