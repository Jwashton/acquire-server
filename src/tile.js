const FIRST_ROW = 0;
const FIRST_COL = 0;

const createTile = function createTile(row = FIRST_ROW, col = FIRST_COL) {
  return { row, col };
};

export default createTile;
