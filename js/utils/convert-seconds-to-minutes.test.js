import assert from 'assert';
import convertSecondsToMinutes from './convert-seconds-to-minutes.js';

suite(`Convert seconds to minutes`, () => {
  test(`Convert 300 seconds`, () => {
    const time = convertSecondsToMinutes(300);

    assert.equal(time.minutes, `05`);
    assert.equal(time.seconds, `00`);
  });

  test(`Convert 280 seconds`, () => {
    const time = convertSecondsToMinutes(280);

    assert.equal(time.minutes, `04`);
    assert.equal(time.seconds, `40`);
  });

  test(`Convert 59 seconds`, () => {
    const time = convertSecondsToMinutes(59);

    assert.equal(time.minutes, `00`);
    assert.equal(time.seconds, `59`);
  });

  test(`Convert 1 seconds`, () => {
    const time = convertSecondsToMinutes(1);

    assert.equal(time.minutes, `00`);
    assert.equal(time.seconds, `01`);
  });

  test(`Convert 0 seconds`, () => {
    const time = convertSecondsToMinutes(0);

    assert.equal(time.minutes, `00`);
    assert.equal(time.seconds, `00`);
  });
});
