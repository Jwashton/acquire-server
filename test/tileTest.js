import test from 'ava';
import createTile from '../src/tile.js';

test('row and col default to 0', t => {
  const blank = createTile();
  const a1    = createTile(0, 0);

  t.deepEqual(blank, a1);
});

test('A newly constructed tile has a row', t => {
  const c1 = createTile(3, 0);

  t.is(c1.row, 3);
});

test('A newly constructed tile has a col', t => {
  const c4 = createTile(3, 4);

  t.is(c4.col, 4);
});

test.todo('A newly constructed tile is empty');
test.todo('A newly constructed tile is not a member of a chain');

test.todo('A tile has a label');
