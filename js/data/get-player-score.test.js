import assert from 'assert';
import getPlayerScore from './get-player-score.js';

let answers;

suite(`Player score`, () => {
  test(`Not all answers`, () => {
    answers = [
      {correctly: true, time: 10000},
      {correctly: false, time: 30000},
      {correctly: true, time: 5000},
      {correctly: true, time: 20000},
      {correctly: true, time: 11000},
      {correctly: false, time: 40000},
      {correctly: true, time: 10000},
      {correctly: false, time: 10000}
    ];

    assert.strictEqual(getPlayerScore(answers, 2), -1);
  });

  test(`All answers, but some with mistakes`, () => {
    answers = [
      {correctly: true, time: 10000},
      {correctly: false, time: 30000},
      {correctly: true, time: 4000},
      {correctly: true, time: 25000},
      {correctly: true, time: 11000},
      {correctly: false, time: 40000},
      {correctly: true, time: 10000},
      {correctly: false, time: 10000},
      {correctly: true, time: 36000},
      {correctly: true, time: 45000}
    ];

    assert.strictEqual(getPlayerScore(answers, 0), 6);
  });

  test(`All answers is slow and correct`, () => {
    answers = [
      {correctly: true, time: 31000},
      {correctly: true, time: 32000},
      {correctly: true, time: 33000},
      {correctly: true, time: 34000},
      {correctly: true, time: 35000},
      {correctly: true, time: 36000},
      {correctly: true, time: 37000},
      {correctly: true, time: 38000},
      {correctly: true, time: 39000},
      {correctly: true, time: 40000}
    ];

    assert.strictEqual(getPlayerScore(answers, 0), 10);
  });

  test(`All answers is fast and correct`, () => {
    answers = [
      {correctly: true, time: 29000},
      {correctly: true, time: 28000},
      {correctly: true, time: 27000},
      {correctly: true, time: 26000},
      {correctly: true, time: 25000},
      {correctly: true, time: 24000},
      {correctly: true, time: 23000},
      {correctly: true, time: 22000},
      {correctly: true, time: 21000},
      {correctly: true, time: 20000}
    ];

    assert.strictEqual(getPlayerScore(answers, 0), 20);
  });

  test(`All answers is correct, with 50/50 fast and slow`, () => {
    answers = [
      {correctly: true, time: 55000},
      {correctly: true, time: 29500},
      {correctly: true, time: 50000},
      {correctly: true, time: 26000},
      {correctly: true, time: 25200},
      {correctly: true, time: 41500},
      {correctly: true, time: 30100},
      {correctly: true, time: 22300},
      {correctly: true, time: 21000},
      {correctly: true, time: 40000}
    ];

    assert.strictEqual(getPlayerScore(answers, 0), 15);
  });
});
