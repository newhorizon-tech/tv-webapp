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

describe('Testing comments counter', () => {
  test('One comment', () => {
    const commentsList = document.createElement('ul');
    commentsList.append(comment1);

    expect(commentsCounter(commentsList)).toBe(1);
  });
  test('Three comments', () => {
    const commentsList = document.createElement('ul');
    commentsList.append(comment1, comment2, comment3);

    expect(commentsCounter(commentsList)).toBe(3);
  });
  });
});
