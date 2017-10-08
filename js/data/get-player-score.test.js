import assert from 'assert';
import getPlayerScore from './get-player-score.js';

let answers;

suite(`Player score`, () => {
  test(`No notes`, () => {
    answers = [
      {correctly: false, time: 10},
      {correctly: true, time: 30},
      {correctly: false, time: 5},
      {correctly: true, time: 20},
      {correctly: true, time: 11},
      {correctly: false, time: 40},
      {correctly: true, time: 10},
      {correctly: false, time: 10}
    ];

    assert.equal(getPlayerScore(answers, -1), -1);
  });

  test(`Not all answers`, () => {
    answers = [
      {correctly: true, time: 10},
      {correctly: true, time: 30},
      {correctly: true, time: 5},
      {correctly: true, time: 20},
      {correctly: true, time: 11},
      {correctly: false, time: 40},
      {correctly: true, time: 10},
      {correctly: true, time: 10}
    ];

    assert.equal(getPlayerScore(answers, 2), -1);
  });

  test(`All answers, but some with mistakes`, () => {
    answers = [
      {correctly: true, time: 10},
      {correctly: false, time: 30},
      {correctly: true, time: 4},
      {correctly: true, time: 25},
      {correctly: true, time: 11},
      {correctly: false, time: 40},
      {correctly: true, time: 10},
      {correctly: false, time: 10},
      {correctly: true, time: 36},
      {correctly: true, time: 45}
    ];

    assert.equal(getPlayerScore(answers, 0), 6);
  });

  test(`All answers is slow and correct`, () => {
    answers = [
      {correctly: true, time: 31},
      {correctly: true, time: 32},
      {correctly: true, time: 33},
      {correctly: true, time: 34},
      {correctly: true, time: 35},
      {correctly: true, time: 36},
      {correctly: true, time: 37},
      {correctly: true, time: 38},
      {correctly: true, time: 39},
      {correctly: true, time: 40}
    ];

    assert.equal(getPlayerScore(answers, 3), 10);
  });

  test(`All answers is fast and correct`, () => {
    answers = [
      {correctly: true, time: 29},
      {correctly: true, time: 28},
      {correctly: true, time: 27},
      {correctly: true, time: 26},
      {correctly: true, time: 25},
      {correctly: true, time: 24},
      {correctly: true, time: 23},
      {correctly: true, time: 22},
      {correctly: true, time: 21},
      {correctly: true, time: 20}
    ];

    assert.equal(getPlayerScore(answers, 3), 20);
  });

  test(`All answers is correct, with 50/50 fast and slow`, () => {
    answers = [
      {correctly: true, time: 55},
      {correctly: true, time: 29},
      {correctly: true, time: 50},
      {correctly: true, time: 26},
      {correctly: true, time: 25},
      {correctly: true, time: 41},
      {correctly: true, time: 30},
      {correctly: true, time: 22},
      {correctly: true, time: 21},
      {correctly: true, time: 40}
    ];

    assert.equal(getPlayerScore(answers, 3), 16);
  });
});
