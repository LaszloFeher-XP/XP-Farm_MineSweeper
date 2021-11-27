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

    describe('3 – Clean square 0;0 and get the number of bombs around', () => {
      test('GIVEN 3 bombs on 0,1 1,0 1,1 WHEN takeStep to 0,0 THEN 3 bombs around your square', () => {
        const mineSweeper = new MineSweeper();
        let expected = `+-+-+-+\n`;
        expected += `| | | |\n`;
        expected += `+-+-+-+\n`;
        expected += `| | | |\n`;
        expected += `+-+-+-+\n`;
        expected += `|3| | |\n`;
        expected += `+-+-+-+\n`;
        expected += `[Sandbox 3x3] 3 bombs around your square.`;
        expect(mineSweeper.getRoundResult()).toStrictEqual(expected);
      });
    });
  });

  describe('US2', () => {

    describe('Bombs next to the me', () => {
      test('7. GIVEN 3 bombs on 2,1 1,1 1,2 WHEN takeStep to 2,2 THEN 3 bombs around your square', () => {
        const mineSweeper = new MineSweeper();
        let expected = `+-+-+-+\n`;
        expected += `| | |3|\n`;
        expected += `+-+-+-+\n`;
        expected += `| | | |\n`;
        expected += `+-+-+-+\n`;
        expected += `| | | |\n`;
        expected += `+-+-+-+\n`;
        expected += `[Sandbox 3x3] 3 bombs around your square.`;
        expect(mineSweeper.getRoundResult()).toStrictEqual(expected);
      });

    });
  });
});
