import createTile from './tile.js';

const FIRST_ELEMENT = 0;
const PREVIOUS_ELEMENT = -1;

const buildRow = function buildRow(rowId, numCols, factory) {
  return [...Array(numCols)].map((_v, i) => factory(rowId, i));
};

const joinCells = function joinCells(tile, neighbor, ...directions) {
  const [thisWay, thatWay] = directions;

  tile[thisWay] = neighbor;
  neighbor[thatWay] = tile;
};

const connectRow = function connectRow(matrix, row) {
  let searchRow, searchCol;

  for (const tile of row) {
    searchRow = tile.row + PREVIOUS_ELEMENT;
    searchCol = tile.col;

    if (searchRow >= FIRST_ELEMENT) {
      joinCells(tile, matrix[searchRow][searchCol], 'north', 'south');
    }

    searchRow = tile.row;
    searchCol = tile.col + PREVIOUS_ELEMENT;

    if (searchCol >= FIRST_ELEMENT) {
      joinCells(tile, matrix[searchRow][searchCol], 'west', 'east');
    }
  }
};

const buildMatrix = function buildMatrix(numRows, numCols, factory) {
  const matrix = [];

  for (let rowId = FIRST_ELEMENT; rowId < numRows; rowId++) {
    const row = buildRow(rowId, numCols, factory);

    matrix.push(row);

    connectRow(matrix, row);
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
