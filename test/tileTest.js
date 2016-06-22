import test from 'ava';
import createTile from '../src/tile.js';

test.beforeEach(t => {
  t.context.a1 = createTile(0, 0);
  t.context.c4 = createTile(2, 3);
  t.context.d3 = createTile(3, 2);
  t.context.d4 = createTile(3, 3);
  t.context.d5 = createTile(3, 4);
  t.context.e4 = createTile(2, 3);
});

test('row and col default to 0', t => {
  const blank = createTile();

  t.deepEqual(blank, t.context.a1);
});

test('A newly constructed tile has a row', t => {
  t.is(t.context.c4.row, 2);
});

test('A newly constructed tile has a col', t => {
  t.is(t.context.c4.col, 3);
});

test.todo('A newly constructed tile has not been drawn');
test.todo('A newly constructed tile is not a member of a chain');

test('A tile has a label', t => {
  t.is(t.context.c4.label, '4C');
  t.is(t.context.d3.label, '3D');
});

test('A tile has a collection of neighbors', t => {
  t.truthy(t.context.d4.neighbors[Symbol.iterator]);
});

test('A tile’s neighbors are all accessible', t => {
  t.context.d4.north = t.context.c4;
  t.context.d4.east  = t.context.d5;
  t.context.d4.south = t.context.e4;
  t.context.d4.west  = t.context.d3;

  t.plan(4);
  for (let neighbor of t.context.d4.neighbors) {
    t.pass();
  }
});
