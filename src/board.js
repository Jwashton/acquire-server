import createTile from './tile.js';

const buildMatrix = function buildMatrix(numRows, numCols, factory) {
  const matrix = [];

  for (let y = 0; y < numRows; y++) {
    const row = [];

    for (let x = 0; x < numCols; x++) {
      row.push(factory(y, x));
    }

    matrix.push(row);
  }

  return matrix;
};

const DEFAULT_ROWS = 9;
const DEFAULT_COLS = 12;

const createBoard = function createBoard() {
  const rows = buildMatrix(DEFAULT_ROWS, DEFAULT_COLS, createTile);

  const lookup = function lookup(row, col) {
    return rows[row][col];
  };

  return {
    rows,
    cols:  [],
    tiles: [],
    lookup
  };
};

export default createBoard;
