import createTile from './tile.js';

const FIRST_ELEMENT = 0;
const PREVIOUS_ELEMENT = -1;

const buildRow = function buildRow(y, numCols, factory) {
  const row = [];

  for (let x = FIRST_ELEMENT; x < numCols; x++) {
    row.push(factory(y, x));
  }

  return row;
};

const connectRow = function connectRow(matrix, row) {
  for (const tile of row) {
    if (tile.row > FIRST_ELEMENT) {
      const north = matrix[tile.row + PREVIOUS_ELEMENT][tile.col];

      tile.north = north;
      north.south = tile;
    }
  }
};

const buildMatrix = function buildMatrix(numRows, numCols, factory) {
  const matrix = [];

  for (let y = FIRST_ELEMENT; y < numRows; y++) {
    const row = buildRow(y, numCols, factory);

    connectRow(matrix, row);

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
