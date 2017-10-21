const logoTemplate = `<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>`;

const replayButtonTemplate = `<span role="button" tabindex="0" class="main-replay js-main-replay">Сыграть ещё раз</span>`;

const getMistakesTemplate = (mistakesNumber) => {
  return `<div class="main-mistakes">
            ${new Array(mistakesNumber).fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``)}
          </div>`;
};

const getPlayerWrapperTemplate = (questionType, songSrc) => {
  return `<div class="player-wrapper">
            <div class="player">
              <audio src="${songSrc}" ${questionType === `artist` ? `autoplay` : ``} loop></audio>
              <button class="player-control ${questionType === `artist` ? `player-control--pause` : `player-control--play`} js-song-play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>`;
};

export {logoTemplate, replayButtonTemplate, getMistakesTemplate, getPlayerWrapperTemplate};
