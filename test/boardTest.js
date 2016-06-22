import test from 'ava';
import createBoard from '../src/board.js';

test('A newly created board has a collection of rows', t => {
  const board = createBoard();

  t.truthy(board.rows[Symbol.iterator]);
});
