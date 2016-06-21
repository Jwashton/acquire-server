const FIRST_ROW = 0;
const FIRST_COL = 0;

const CHAR_CODE_OFFSET = 65;
const LABEL_OFFSET = 1;

const createTile = function createTile(row = FIRST_ROW, col = FIRST_COL) {
  const tile = { row, col };

  Reflect.defineProperty(tile, 'label', {
    get() {
      const rowLabel = String.fromCharCode(CHAR_CODE_OFFSET + row);
      const colLabel = col + LABEL_OFFSET;

      return colLabel + rowLabel;
    }
  });

  return tile;
};

export default createTile;
