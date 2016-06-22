import test from 'ava';
import createBoard from '../src/board.js';

test('A newly created board has a collection of rows', t => {
  const board = createBoard();

  t.truthy(board.rows[Symbol.iterator]);
});

test('A newly created board has a collection of columns', t => {
  const board = createBoard();

  t.truthy(board.cols[Symbol.iterator]);
});

test('A newly created board has a collection of tiles', t => {
  const board = createBoard();

  t.truthy(board.tiles[Symbol.iterator]);
});

test('A newly created board defaults to 9 rows', t => {
  t.plan(9);

  const board = createBoard();

  for (const _row of board.rows) {
    t.pass();
  }
});

test.todo('A newly created board defaults to 12 columns');

test.todo('A board will let you access a specific tile');

test.todo('Tiles on a newly created board are connected to the north');
test.todo('Tiles on a newly created board are connected to the south');
test.todo('Tiles on a newly created board are connected to the east');
test.todo('Tiles on a newly created board are connected to the west');

test.todo('A board lets you pick an uncliamed tile at random');
