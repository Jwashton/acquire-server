const FIRST_ROW = 0;
const FIRST_COL = 0;

const CHAR_CODE_OFFSET = 65;
const LABEL_OFFSET = 1;

const calculateLabel = function calculateLabel(row, col) {
  const rowLabel = String.fromCharCode(CHAR_CODE_OFFSET + row);
  const colLabel = col + LABEL_OFFSET;

  return colLabel + rowLabel;
};

const constAttr = function constAttr(obj, attr, value) {
  return Reflect.defineProperty(obj, attr, {
    value,
    writable:   false,
    enumerable: true
  });
};

// Tile factory
//
// Takes 0-indexed row and col values
const createTile = function createTile(row = FIRST_ROW, col = FIRST_COL) {
  const label = calculateLabel(row, col);

  const tile = {};

  constAttr(tile, 'row', row);
  constAttr(tile, 'col', col);
  constAttr(tile, 'label', label);

  return tile;
};

export default createTile;
