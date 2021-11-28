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
        // GIVEN
        const mineSweeper = new MineSweeper();
        mineSweeper.addBomb(1, 1);

        // WHEN
        mineSweeper.takeStep(1, 1);

        // THEN
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
        // GIVEN
        const mineSweeper = new MineSweeper();
        mineSweeper.addBomb(0, 1);
        mineSweeper.addBomb(1, 0);
        mineSweeper.addBomb(1, 1);

        // WHEN
        mineSweeper.takeStep(0, 0);

        // THEN
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

    describe('4 – Mark the bombs around – What I expect after I marked the 3 squares as bombs [1;0 + 1;1 + 0;1]', () => {
      test('GIVEN 3 bombs on 0,1 1,0 1,1 WHEN takeStep to 0,0 and flag bomb field THEN return `Square flagged as bomb`', () => {

        // GIVEN
        const mineSweeper = new MineSweeper();
        mineSweeper.addBomb(0, 1);
        mineSweeper.addBomb(1, 0);
        mineSweeper.addBomb(1, 1);

        // WHEN
        mineSweeper.takeStep(0, 0);
        mineSweeper.flagSquare(0, 1);
        mineSweeper.flagSquare(1, 0);
        mineSweeper.flagSquare(1, 1);

        // THEN
        let expected = `+-+-+-+\n`;
        expected += `| | | |\n`;
        expected += `+-+-+-+\n`;
        expected += `|*|*| |\n`;
        expected += `+-+-+-+\n`;
        expected += `|3|*| |\n`;
        expected += `+-+-+-+\n`;
        expected += `[Sandbox 3x3] Square flagged as bomb.`;
        expect(mineSweeper.getRoundResult()).toStrictEqual(expected);
      });
    });

    describe('5 – Game Victory – After I cleared the all the squares [2;0 + 2;1 + 2;2 + 1;2 + 0;2]', () => {
      test('GIVEN 3 bombs on 0,1 1,0 1,1 WHEN takeStep to 0,0 and flag bomb fields THEN return `the land is cleared! GOOD JOB!`', () => {

        // GIVEN
        const mineSweeper = new MineSweeper();
        mineSweeper.addBomb(0, 1);
        mineSweeper.addBomb(1, 0);
        mineSweeper.addBomb(1, 1);

        // WHEN
        mineSweeper.takeStep(0, 0);
        mineSweeper.flagSquare(0, 1);
        mineSweeper.flagSquare(1, 0);
        mineSweeper.flagSquare(1, 1);
        mineSweeper.takeStep(2, 0);
        mineSweeper.takeStep(2, 1);
        mineSweeper.takeStep(2, 2);
        mineSweeper.takeStep(1, 2);
        mineSweeper.takeStep(0, 2);

        // THEN
        let expected = `+-+-+-+\n`;
        expected += `|2|2|1|\n`;
        expected += `+-+-+-+\n`;
        expected += `|*|*|2|\n`;
        expected += `+-+-+-+\n`;
        expected += `|3|*|2|\n`;
        expected += `+-+-+-+\n`;
        expected += `[Sandbox 3x3] the land is cleared! GOOD JOB!`;
        expect(mineSweeper.getFinalResult()).toStrictEqual(expected);
      });
    });

  });

  describe('US2', () => {

    describe('Bombs next to me', () => {
      test('7. GIVEN 3 bombs on 2,1 1,1 1,2 WHEN takeStep to 2,2 THEN 3 bombs around your square', () => {
        // GIVEN
        const mineSweeper = new MineSweeper();
        mineSweeper.addBomb(2, 1);
        mineSweeper.addBomb(1, 1);
        mineSweeper.addBomb(1, 2);

        // WHEN
        mineSweeper.takeStep(2, 2);

        // THEN
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

      test('8. GIVEN 2 bombs on 1,0 1,2 1,2 WHEN takeStep to 2,2 THEN 3 bombs around your square', () => {

        // GIVEN
        const mineSweeper = new MineSweeper();
        mineSweeper.addBomb(1, 0);
        mineSweeper.addBomb(1, 2);

        // WHEN
        mineSweeper.takeStep(1, 1);

        // THEN
        let expected = `+-+-+-+\n`;
        expected += `| | | |\n`;
        expected += `+-+-+-+\n`;
        expected += `| |2| |\n`;
        expected += `+-+-+-+\n`;
        expected += `| | | |\n`;
        expected += `+-+-+-+\n`;
        expected += `[Sandbox 3x3] 2 bombs around your square.`;
        expect(mineSweeper.getRoundResult()).toStrictEqual(expected);
      });
    });
  });
});
