import assert from 'assert';
import {WordsVariants} from '../data/game.js';
import declineWord from './decline-word.js';

suite(`Decline words`, () => {
  test(`Minutes`, () => {
    assert.equal(declineWord(0, WordsVariants.MINUTES), `минут`);
    assert.equal(declineWord(1, WordsVariants.MINUTES), `минуту`);
    assert.equal(declineWord(2, WordsVariants.MINUTES), `минуты`);
    assert.equal(declineWord(3, WordsVariants.MINUTES), `минуты`);
    assert.equal(declineWord(4, WordsVariants.MINUTES), `минуты`);
    assert.equal(declineWord(5, WordsVariants.MINUTES), `минут`);
    assert.equal(declineWord(6, WordsVariants.MINUTES), `минут`);
    assert.equal(declineWord(7, WordsVariants.MINUTES), `минут`);
    assert.equal(declineWord(8, WordsVariants.MINUTES), `минут`);
    assert.equal(declineWord(9, WordsVariants.MINUTES), `минут`);
    assert.equal(declineWord(10, WordsVariants.MINUTES), `минут`);
    assert.equal(declineWord(21, WordsVariants.MINUTES), `минуту`);
    assert.equal(declineWord(22, WordsVariants.MINUTES), `минуты`);
  });

  test(`Seconds`, () => {
    assert.equal(declineWord(0, WordsVariants.SECONDS), `секунд`);
    assert.equal(declineWord(1, WordsVariants.SECONDS), `секунду`);
    assert.equal(declineWord(2, WordsVariants.SECONDS), `секунды`);
    assert.equal(declineWord(3, WordsVariants.SECONDS), `секунды`);
    assert.equal(declineWord(4, WordsVariants.SECONDS), `секунды`);
    assert.equal(declineWord(5, WordsVariants.SECONDS), `секунд`);
    assert.equal(declineWord(6, WordsVariants.SECONDS), `секунд`);
    assert.equal(declineWord(7, WordsVariants.SECONDS), `секунд`);
    assert.equal(declineWord(8, WordsVariants.SECONDS), `секунд`);
    assert.equal(declineWord(9, WordsVariants.SECONDS), `секунд`);
    assert.equal(declineWord(10, WordsVariants.SECONDS), `секунд`);
    assert.equal(declineWord(21, WordsVariants.SECONDS), `секунду`);
    assert.equal(declineWord(22, WordsVariants.SECONDS), `секунды`);
  });

  test(`Score`, () => {
    assert.equal(declineWord(0, WordsVariants.SCORE), `баллов`);
    assert.equal(declineWord(1, WordsVariants.SCORE), `балл`);
    assert.equal(declineWord(2, WordsVariants.SCORE), `балла`);
    assert.equal(declineWord(3, WordsVariants.SCORE), `балла`);
    assert.equal(declineWord(4, WordsVariants.SCORE), `балла`);
    assert.equal(declineWord(5, WordsVariants.SCORE), `баллов`);
    assert.equal(declineWord(6, WordsVariants.SCORE), `баллов`);
    assert.equal(declineWord(7, WordsVariants.SCORE), `баллов`);
    assert.equal(declineWord(8, WordsVariants.SCORE), `баллов`);
    assert.equal(declineWord(9, WordsVariants.SCORE), `баллов`);
    assert.equal(declineWord(10, WordsVariants.SCORE), `баллов`);
    assert.equal(declineWord(11, WordsVariants.SCORE), `баллов`);
    assert.equal(declineWord(12, WordsVariants.SCORE), `баллов`);
    assert.equal(declineWord(13, WordsVariants.SCORE), `баллов`);
    assert.equal(declineWord(14, WordsVariants.SCORE), `баллов`);
    assert.equal(declineWord(15, WordsVariants.SCORE), `баллов`);
    assert.equal(declineWord(16, WordsVariants.SCORE), `баллов`);
    assert.equal(declineWord(17, WordsVariants.SCORE), `баллов`);
    assert.equal(declineWord(18, WordsVariants.SCORE), `баллов`);
    assert.equal(declineWord(19, WordsVariants.SCORE), `баллов`);
    assert.equal(declineWord(20, WordsVariants.SCORE), `баллов`);
  });

  test(`Fast`, () => {
    assert.equal(declineWord(0, WordsVariants.FAST), `быстрых`);
    assert.equal(declineWord(1, WordsVariants.FAST), `быстрый`);
    assert.equal(declineWord(2, WordsVariants.FAST), `быстрых`);
    assert.equal(declineWord(3, WordsVariants.FAST), `быстрых`);
    assert.equal(declineWord(4, WordsVariants.FAST), `быстрых`);
    assert.equal(declineWord(5, WordsVariants.FAST), `быстрых`);
    assert.equal(declineWord(6, WordsVariants.FAST), `быстрых`);
    assert.equal(declineWord(7, WordsVariants.FAST), `быстрых`);
    assert.equal(declineWord(8, WordsVariants.FAST), `быстрых`);
    assert.equal(declineWord(9, WordsVariants.FAST), `быстрых`);
    assert.equal(declineWord(10, WordsVariants.FAST), `быстрых`);
  });

  test(`Mistakes`, () => {
    assert.equal(declineWord(0, WordsVariants.MISTAKES), `ошибок`);
    assert.equal(declineWord(1, WordsVariants.MISTAKES), `ошибку`);
    assert.equal(declineWord(2, WordsVariants.MISTAKES), `ошибки`);
    assert.equal(declineWord(3, WordsVariants.MISTAKES), `ошибки`);
    assert.equal(declineWord(4, WordsVariants.MISTAKES), `ошибки`);
    assert.equal(declineWord(5, WordsVariants.MISTAKES), `ошибок`);
  });
});
