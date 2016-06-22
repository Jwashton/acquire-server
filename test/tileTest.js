import test from 'ava';
import createTile from '../src/tile.js';

test.beforeEach(t => {
  t.context.a1 = createTile(0, 0);
  t.context.a2 = createTile(0, 1);
  t.context.b1 = createTile(1, 0);
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
  Object.assign(t.context.d4, {
    north: t.context.c4,
    east:  t.context.d5,
    south: t.context.e4,
    west:  t.context.d3
  });

  t.plan(4);
  for (const _neighbor of t.context.d4.neighbors) {
    t.pass();
  }
});

test('A tile’s neighbors do not include missing spaces', t => {
  Object.assign(t.context.a1, {
    east:  t.context.a2,
    south: t.context.b1
  });

  t.plan(2);
  for (const _neighbor of t.context.a1.neighbors) {
    t.pass();
  }
});
