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

describe('checks for card elements', () => {
  test('One show', () => {
    document.body.innerHTML = '';

    const testDiv = document.createElement('div');
    testDiv.className = 'tv-show-card';

    document.body.append(testDiv);
    const showCount = itemsCounter();

    expect(showCount).toEqual(1);
  });

  test('two shows', () => {
    document.body.innerHTML = '';

    const testDiv = document.createElement('div');
    testDiv.className = 'tv-show-card';
    document.body.append(testDiv);

    const testDiv2 = document.createElement('div');
    testDiv2.className = 'tv-show-card';
    document.body.append(testDiv2);

    const showCount = itemsCounter();

    expect(showCount).toEqual(2);
  });
});
