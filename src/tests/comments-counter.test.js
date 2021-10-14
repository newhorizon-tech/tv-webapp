/**
 * @jest-environment jsdom
 */

import commentsCounter from '../comments-counter';

const comment1 = document.createElement('li');
comment1.textContent = 'One';
const comment2 = document.createElement('li');
comment1.textContent = 'One';

describe('Testing Comments Counter', () => {
  test('Testing if it works', () => {
    const commentsList = document.createElement('ul');

    expect(commentsList.tagName).toBe('UL');
  });
});
