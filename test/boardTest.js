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

test('A newly created board defaults to 9 rows', t => {
  t.plan(9);

  for (const _row of t.context.board.rows) {
    t.pass();
  }
});

test('Each row defaults to 12 columns', t => {
  t.plan(12);

  for (const _col of t.context.board.rows[2]) {
    t.pass();
  }
});

test('Each cell knows its position', t => {
  t.plan(12);

  for (let x = 0; x < 12; x++) {
    t.is(t.context.board.rows[4][x].col, x);
  }
});

test('A board will let you access a specific tile', t => {
  t.is(t.context.board.lookup(4, 2), t.context.board.rows[4][2]);
});

test('Tiles on a newly created board are connected to the north', t => {

  // +-----
  // |  a
  // |  b
  const a = t.context.board.lookup(0, 2);
  const b = t.context.board.lookup(1, 2);

  t.is(b.north, a);
});

test.todo('Tiles on a newly created board are connected to the south');
test.todo('Tiles on a newly created board are connected to the east');
test.todo('Tiles on a newly created board are connected to the west');

test.todo('A board lets you pick an uncliamed tile at random');
