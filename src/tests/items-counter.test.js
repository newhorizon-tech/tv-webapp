/**
 * @jest-environment jsdom
 */
const { itemsCounter } = require('../counters');

describe('checks for items counter', () => {
  const result = itemsCounter();

  test('to be greater than or equal zero', () => {
    expect(result).toBeGreaterThanOrEqual(0);
  });

  test('to be a number', () => {
    expect(result).toEqual(expect.any(Number));
  });
});
