const buildMatrix = function buildMatrix(numRows, numCols, _factory) {
  const matrix = [];

  for (let _y = 0; _y < numRows; _y++) {
    const row = [];

    for (let x = 0; x < numCols; x++) {
      row.push(x);
    }

    matrix.push(row);
  }

  return matrix;
};

const DEFAULT_ROWS = 9;
const DEFAULT_COLS = 12;

const createBoard = function createBoard() {
  const rows = buildMatrix(DEFAULT_ROWS, DEFAULT_COLS);

  return {
    rows,
    cols:  [],
    tiles: []
  };
};

export default createBoard;
