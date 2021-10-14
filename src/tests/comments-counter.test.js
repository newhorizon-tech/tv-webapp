/**
 * @jest-environment jsdom
 */

import commentsCounter from '../comments-counter';

const comment1 = document.createElement('li');
comment1.className = 'comment';
const comment2 = document.createElement('li');
comment2.className = 'comment';
const comment3 = document.createElement('li');
comment3.className = 'comment';
const comment4 = document.createElement('li');
comment4.className = 'comment';
const comment5 = document.createElement('li');
comment5.className = 'comment';

describe('Testing Comments Counter', () => {
  test('Testing if it works', () => {
    const commentsList = document.createElement('ul');

    expect(commentsList.tagName).toBe('UL');
  });
});
