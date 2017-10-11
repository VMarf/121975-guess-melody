import assert from 'assert';
import setTimer from './set-timer.js';

suite(`Timer`, () => {
  test(`Timer tick`, () => {
    const timer = setTimer(30);
    const timerTick = timer.tick();

    assert.equal(timerTick, 29);
  });

  test(`Timer expired`, () => {
    const timer = setTimer(0);

    assert.equal(timer, -1);
  });
});
