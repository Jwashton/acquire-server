import createTile from './tile.js';

const FIRST_ELEMENT = 0;

const buildMatrix = function buildMatrix(numRows, numCols, factory) {
  return Array.from({ length: numRows }, (_v, r) =>
    Array.from({ length: numCols }, (_w, c) =>
      factory(r, c))
  );
};

const rotateMatrix = function rotateMatrix(matrix) {
  return buildMatrix(matrix[0].length, matrix.length,
    (rowId, colId) => matrix[colId][rowId]);
};

const connectRow = function connectRow(matrix, row) {
  for (const tile of row) {
    if (tile.row > FIRST_ELEMENT) {
      tile.north = matrix[tile.row - 1][tile.col];
      tile.north.south = tile;
    }

    if (tile.col > FIRST_ELEMENT) {
      tile.west = matrix[tile.row][tile.col - 1];
      tile.west.east = tile;
    }
  }
};

const DEFAULT_ROWS = 9;
const DEFAULT_COLS = 12;

const createBoard = function createBoard(numRows = DEFAULT_ROWS,
                                         numCols = DEFAULT_COLS) {
  const rows = buildMatrix(numRows, numCols, createTile);

  const tiles = new Set([].concat(...rows));
  const cols = rotateMatrix(rows);

  const lookup = function lookup(row, col) {
    return rows[row][col];
  };

  rows.forEach(row => connectRow(rows, row));

  return {
    rows,
    cols,
    tiles,
    lookup,
    tilesAvailable: tiles.size
  };
};

export default createBoard;
