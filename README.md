# MineSweeper Kata

The exercise involves developing a Mine Sweeper game strictly adhering to the TDD, ATDD rules.

## Mine	Sweeper - Game	Rules:	

You are presented with a board of squares. Some squares contain mines (bombs), others don't. If you step on a square containing a bomb, you lose. If you manage to clear all the squares (without clicking on any bombs) you win.

Clearing a square which doesn't have a bomb reveals the number of neighbouring squares containing bombs.
If you guess a square contains a bomb mark it with a flag.

A squares "neighbours" are the squares adjacent above, below, left, right, and all 4 diagonals. Squares on the sides of the board or in a corner have fewer neighbors. The board does not wrap around the edges. If you clear a square with 0 neighboring bombs, all its neighbors will automatically open; recursively.

The first square you open could be a bomb.
You don't have to mark all the bombs to win; you just need to open all non-bomb squares.

## User Stories

### User Story 1. - UAT tests
As a user 
I want to get valid UAT tests
So that create the logic for handling tests

#### Scenarios

#### UAT1.1 – Game Board Creation phase:
 - Given no values
 - When creating board
 - Then returns
  `+-+-+-+`
  `| | | |`
  `+-+-+-+`
  `| | | |`
  `+-+-+-+`
  `| | | |`
  `+-+-+-+`
  `[Sandbox 3x3] Game created`

#### UAT1.2 – Game Over - Step on a bomb on 1;1
 - Given a board with bomb on 1,1
 - When takeStep to 1,1
 - Then returns
  `+-+-+-+`
  `| | | |`
  `+-+-+-+`
  `| |X| |`
  `+-+-+-+`
  `| | | |`
  `+-+-+-+`
  `[Sandbox 3x3] BOOM! – Game Over.`

#### UAT1.3 – Clean square 0;0 and get the number of bombs around
 - Given 3 bombs on 0,1 1,0 1,1
 - When takeStep to 0,0
 - Then returns
  `+-+-+-+`
  `| | | |`
  `+-+-+-+`
  `| | | |`
  `+-+-+-+`
  `|3| | |`
  `+-+-+-+`
  `[Sandbox 3x3] 3 bombs around your square.`

#### UAT1.4 – Mark the bombs around – What I expect after I marked the 3 squares as bombs [1;0 + 1;1 + 0;1]
 - Given 3 bombs on 0,1 1,0 1,1
 - When takeStep to 0,0 and flag bomb
 - Then returns 
  `+-+-+-+`
  `| | | |`
  `+-+-+-+`
  `|*|*| |`
  `+-+-+-+`
  `|3|*| |`
  `+-+-+-+`
  `[Sandbox 3x3] Square flagged as bomb.`

#### UAT1.5 – Game Victory – After I cleared the all the squares [2;0 + 2;1 + 2;2 + 1;2 + 0;2]
 - Given 3 bombs on 0,1 1,0 1,1
 - When takeStep to 0,0 and flag bomb fields
 - Then returns 
  `+-+-+-+`
  `|2|2|1|`
  `+-+-+-+`
  `|*|*|2|`
  `+-+-+-+`
  `|3|*|2|`
  `+-+-+-+`
  `[Sandbox 3x3] [Sandbox 3x3] the land is cleared! GOOD JOB!`

#### UAT1.6 – Massive cleaning and victory clicking on 0;0
 - Given 1 bomb on 2,2 
 - When takeStep to 0,0
 - Then returns
  `+-+-+-+`
  `|_|1| |`
  `+-+-+-+`
  `|_|1|1|`
  `+-+-+-+`
  `|_|_|_|`
  `+-+-+-+`
  `[Sandbox 3x3] the land is cleared! GOOD JOB!`

### User story 2. - Bombs next to me
As a user
I want to find find how many bombs can I find neext to the selected cells
So that check neighbour cells

#### Scenarios

#### 2.7
 - Given 3 bombs on 2,1 1,1 1,2
 - When takeStep to 2,2
 - Then returns `3 bombs around your square`

#### 2.8
 - Given 3 bombs on 1,0 1,2
 - When takeStep to 1,1
 - Then returns `2 bombs around your square`

### User story 3. - Clear the board
As a user
I want to clear the board with steps
So that check if board is cleared

#### Scenarios

#### 3.9
 - Given 3 bombs on 0,1 1,0 1,1 
 - When takeSteps
 - Then return `the land is cleared! GOOD JOB!`

#### 3.10
 - Given 4 bombs on 0,1 1,0 1,1 1,2
 - When takeSteps
 - Then return `the land is cleared! GOOD JOB!`

### User story 4. - Clear the board recursively
As a user
I want to clear the board with steps
So that check if board is cleared with recursion

#### Scenarios

#### 4.11
 - Given 1 bomb on 0,0
 - When takeStep to 2,2
 - Then recursive check to fields have 0 bombs 0,2 1,2

### User story 5. - Game Logic tests
As a user
I want find free cells on the board
So that check for cells

#### Scenarios

#### 5.12
 - Given 1 bomb on 2,2 and 8 steps
 - When search for free cells
 - Then returns 2,2
 
#### 5.13
 - Given 1 bomb on 0,0 and 1 step on 2,2
 - When search for free cells
 - Then finds only 0,0

#### 5.14
 - Given 1 bomb on 1,1 and 8 flags
 - When search for free cells
 - Then returns 1,1

### User story 6. - Game to run
As a user
I want to run the game
So that create the start.js file

# Setting up the environment

## To install dependencies

To install dependencies, run the following:

```npm install```

## To run the tests

To run the tests, there is a script in the project root called test. It calculates code coverage, incorporates watch mode, and prints in verbose mode, so all test file's test report will be visible. Alternatively, you can achieve the same with the command the script contains:

```npm test -- --watchAll --collect-coverage --verbose``` 


## To run the program (BOT game) in the terminal:

To run the working program

```node 'src/start.js'```