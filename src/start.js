const { MineSweeper } = require('./minesweeper');

class Start {
  startGame() {
    const mineSweeper = new MineSweeper();

    mineSweeper.addBomb(0, 0);
    mineSweeper.addBomb(0, 2);

    console.log(`${mineSweeper.getGameBoardAndCreationLabels()}\n`);
    const interval = setInterval(() => {
      let freeCell = mineSweeper.searchForFreeCell();
      mineSweeper.takeStep(freeCell[0], freeCell[1]);
      console.log(`${mineSweeper.getRoundResult()}\n`);
      if (mineSweeper.gameOver || mineSweeper.cleared()) {
        console.log(mineSweeper.getFinalResult());
        clearInterval(interval);
      }
    }, 500);
  }
}

module.exports = {
  MineSweeper,
};

const start = new Start();
start.startGame();