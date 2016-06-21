const FIRST_ROW = 0;
const FIRST_COL = 0;

const CHAR_CODE_OFFSET = 65;
const LABEL_OFFSET = 1;

// Tile factory
//
// Takes 0-indexed row and col values
const createTile = function createTile(row = FIRST_ROW, col = FIRST_COL) {
  const tile = { row, col };

  const methods = {

    // Calculate a human-readable label for this tile
    get label() {
      const rowLabel = String.fromCharCode(CHAR_CODE_OFFSET + row);
      const colLabel = col + LABEL_OFFSET;

      return colLabel + rowLabel;
    }
  };

  return Object.assign(tile, methods);
};

export default createTile;
