import assert from 'assert';
import getPlayerResult from './get-player-result.js';

const resultsOtherPlayers = [4, 5, 8, 10, 11, 15, 19];

let resultCurrentPlayer = {};

suite(`Player result`, () => {
  test(`Time is up`, () => {
    resultCurrentPlayer = {
      score: 10,
      remainingNotes: 3,
      remainingTime: 0
    };

    assert.equal(getPlayerResult(resultsOtherPlayers, resultCurrentPlayer), `Время вышло! Вы не успели отгадать все мелодии.`);
  });

  test(`The notes have run out`, () => {
    resultCurrentPlayer = {
      score: 7,
      remainingNotes: -1,
      remainingTime: 140
    };

    assert.equal(getPlayerResult(resultsOtherPlayers, resultCurrentPlayer), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });

  test(`Player successfully finished the game`, () => {
    resultCurrentPlayer = {
      score: 17,
      remainingNotes: 1,
      remainingTime: 60
    };

    assert.equal(getPlayerResult(resultsOtherPlayers, resultCurrentPlayer), `Вы заняли 2-е место из 8 игроков. Это лучше чем у 0.75% игроков.`);
  });
});
