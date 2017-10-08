import assert from 'assert';
import setTimer from './set-timer.js';

suite(`Timer`, () => {
  test(`Timer tick`, () => {
    const timer = setTimer(30);
    const timerValueAfterTick = timer.tick().value;

    assert.equal(timerValueAfterTick, 29);
  });

  test(`Timer expired`, () => {
    const timer = setTimer(0);

    assert.equal(timer, `timer expired`);
  });
});
