const buildMatrix = function buildMatrix(numRows, _numCols, _factory) {
  const matrix = [];

  for (let y = 0; y < numRows; y++) {
    matrix.push([]);
  }

  return matrix;
};

const DEFAULT_ROWS = 9;

const createBoard = function createBoard() {
  const rows = buildMatrix(DEFAULT_ROWS);

  return {
    rows,
    cols:  [],
    tiles: []
  };
};

export default createBoard;
