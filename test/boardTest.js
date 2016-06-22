import test from 'ava';
import createBoard from '../src/board.js';

test.beforeEach(t => {
  t.context.board = createBoard();
});

test('A newly created board has a collection of rows', t => {
  t.truthy(t.context.board.rows[Symbol.iterator]);
});

test('A newly created board has a collection of columns', t => {
  t.truthy(t.context.board.cols[Symbol.iterator]);
});

test('A newly created board has a collection of tiles', t => {
  t.truthy(t.context.board.tiles[Symbol.iterator]);
});

test('A newly created board defaults to 108 tiles', t => {
  t.plan(108);

  for (const _tile of t.context.board.tiles) {
    t.pass();
  }
});

test('A newly created board defaults to 9 rows', t => {
  t.plan(9);

  for (const _row of t.context.board.rows) {
    t.pass();
  }
});

test('Each row defaults to 12 columns', t => {
  t.plan(12);

  for (const _col of t.context.board.cols) {
    t.pass();
  }
});

test('Each cell knows its position', t => {
  t.plan(12);

  for (let x = 0; x < 12; x++) {
    t.is(t.context.board.rows[4][x].col, x);
  }
});

test('A board will let you lookup a specific tile', t => {
  t.is(t.context.board.lookup(4, 2), t.context.board.rows[4][2]);
});

// +-----
// |  a
// |  b
test('Tiles on a newly created board are connected to the north', t => {
  const a = t.context.board.lookup(0, 2);
  const b = t.context.board.lookup(1, 2);

  t.is(b.north, a);
});

// +-----
// |  a
// |  b
test('Tiles on a newly created board are connected to the south', t => {
  const a = t.context.board.lookup(0, 2);
  const b = t.context.board.lookup(1, 2);

  t.is(a.south, b);
});

// +-----
// |
// | ab
// |
test('Tiles on a newly created board are connected to the east', t => {
  const a = t.context.board.lookup(1, 1);
  const b = t.context.board.lookup(1, 2);

  t.is(a.east, b);
});

// +-----
// |
// | ab
// |
test('Tiles on a newly created board are connected to the west', t => {
  const a = t.context.board.lookup(1, 1);
  const b = t.context.board.lookup(1, 2);

  t.is(b.west, a);
});

test.skip('A board tells you how many tiles are available', t => {
  t.is(t.context.board.tilesAvailable, 108);
});
