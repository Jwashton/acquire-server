const CAPITAL_A = 65;
const LABEL_OFFSET = 1;

const intToLetter = function intToLetter(i) {
  return String.fromCharCode(i + CAPITAL_A);
};

const calculateLabel = function calculateLabel(row, col) {
  const colLabel = col + LABEL_OFFSET;

  return colLabel + intToLetter(row);
};

// Tile factory
//
// Takes 0-indexed row and col values
const createTile = function createTile(row, col) {
  const label = calculateLabel(row, col);

  const tile = {
    row,
    col,
    label,
    state: 'available',

    get neighbors() {
      return [
        tile.north,
        tile.east,
        tile.south,
        tile.west
      ].filter(Boolean);
    }
  };

  return tile;
};

export default createTile;
