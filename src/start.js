const { MineSweeper } = require('./minesweeper');

class Start {
  startGame() {
    const mineSweeper = new MineSweeper();
    const NUMBER_OF_BOMBS = 2;
    let bombs = [];
    let i = 1;
    do {
      let freeCell = mineSweeper.searchForFreeCell();
      if (!bombs.includes(freeCell.toString())) {
        mineSweeper.addBomb(freeCell[0], freeCell[1]);
        // console.log(`${i++}. mine: `, freeCell);
        bombs.push(freeCell.toString());
      }
    } while (bombs.length < NUMBER_OF_BOMBS);


    console.log(`${mineSweeper.getGameBoardAndCreationLabels()}\n`);
    const interval = setInterval(() => {
      let freeCell = mineSweeper.searchForFreeCell();
      mineSweeper.takeStep(freeCell[0], freeCell[1]);
      // console.log(`STEP: `, freeCell);
      if (!mineSweeper.gameOver && !mineSweeper.cleared()) {
        console.log(`${mineSweeper.getRoundResult()}\n`);
      }
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