import createTile from './tile.js';

const FIRST_ELEMENT = 0;
const PREVIOUS_ELEMENT = -1;

const buildRow = function buildRow(rowId, numCols, factory) {
  return [...Array(numCols)].map((_v, i) => factory(rowId, i));


};

const connectRow = function connectRow(matrix, row) {
  for (const tile of row) {
    if (tile.row > FIRST_ELEMENT) {
      const north = matrix[tile.row + PREVIOUS_ELEMENT][tile.col];

      tile.north = north;
      north.south = tile;
    }

    if (tile.col > FIRST_ELEMENT) {
      const west = row[tile.col + PREVIOUS_ELEMENT];

      tile.west = west;
      west.east = tile;
    }
  }
};

const buildMatrix = function buildMatrix(numRows, numCols, factory) {
  const matrix = [];

  for (let rowId = FIRST_ELEMENT; rowId < numRows; rowId++) {
    const row = buildRow(rowId, numCols, factory);

    connectRow(matrix, row);

    matrix.push(row);
  }

  return matrix;
};

const rotateMatrix = function rotateMatrix(matrix) {
  const cols = [];
  const rowPairs = matrix.map((row, rowId) => ({ row, rowId }));

  for (const { row, rowId } of rowPairs) {
    const cellPairs = row.map((cell, colId) => ({ cell, colId }));

    for (const { cell, colId } of cellPairs) {
      cols[colId] = cols[colId] || [];
      cols[colId][rowId] = cell;
    }
  }

  return cols;
};

const DEFAULT_ROWS = 9;
const DEFAULT_COLS = 12;

const createBoard = function createBoard() {
  const rows = buildMatrix(DEFAULT_ROWS, DEFAULT_COLS, createTile);

  const tiles = new Set([].concat(...rows));
  const cols = rotateMatrix(rows);

  const lookup = function lookup(row, col) {
    return rows[row][col];
  };

  return {
    rows,
    cols,
    tiles,
    lookup,
    tilesAvailable: 108
  };
};

export default createBoard;
