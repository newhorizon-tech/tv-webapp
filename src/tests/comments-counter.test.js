/**
 * @jest-environment jsdom
 */

import { commentsCounter } from '../counters';

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
  test('Zero comments', () => {
    const commentsList = document.createElement('ul');

    expect(commentsCounter(commentsList)).toBe(0);
  });

  test('One comment', () => {
    const commentsList = document.createElement('ul');
    commentsList.append(comment1);

    expect(commentsCounter(commentsList)).toBe(1);
  });

  test('Two comments', () => {
    const commentsList = document.createElement('ul');
    commentsList.append(comment1, comment2);

    expect(commentsCounter(commentsList)).toBe(2);
  });

  test('Three comments', () => {
    const commentsList = document.createElement('ul');
    commentsList.append(comment1, comment2, comment3);

    expect(commentsCounter(commentsList)).toBe(3);
  });

  test('Four comments', () => {
    const commentsList = document.createElement('ul');
    commentsList.append(comment1, comment2, comment3, comment4);

    expect(commentsCounter(commentsList)).toBe(4);
  });

  test('Five comments', () => {
    const commentsList = document.createElement('ul');
    commentsList.append(comment1, comment2, comment3, comment4, comment5);

    expect(commentsCounter(commentsList)).toBe(5);
  });
});

describe('Negative test cases', () => {
  test('span element as input', () => {
    const commentsList = document.createElement('span');

    expect(commentsCounter(commentsList)).toBe('Invalid Input');
  });

  test('img element as input', () => {
    const commentsList = document.createElement('img');

    expect(commentsCounter(commentsList)).toBe('Invalid Input');
  });

  test('Number as input', () => {
    const commentsList = 12345;

    expect(commentsCounter(commentsList)).toBe('Invalid Input');
  });

  test('String as input', () => {
    const commentsList = 'string';

    expect(commentsCounter(commentsList)).toBe('Invalid Input');
  });

  test('Child elements with incorrect class name', () => {
    const commentsList = document.createElement('ul');
    const badChild = document.createElement('li');
    badChild.className = 'no-message';

    commentsList.append(badChild);

    expect(commentsCounter(commentsList)).toBe(0);
  });
});
