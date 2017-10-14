const logoTemplate = `<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>`;

// @TODO: Для js-song-play нужен обработчик события, который меняет классы player-control--play, player-control--pause и управляет воспроизведением трека
const playerWrapperTemplate = `<div class="player-wrapper">
        <div class="player">
          <audio src=""></audio>
          <button class="player-control player-control--play js-song-play"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>`;

const replayButtonTemplate = `<span role="button" tabindex="0" class="main-replay js-main-replay">Сыграть ещё раз</span>`;

const getStateTemplate = (state) => {
  const stateTemplate = `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">05</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">00</span>
      </div>
    </svg>
    
    <div class="main-mistakes">
      ${new Array(state.mistakes)
        .fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`)
        .join(``)}
    </div>`;

  return stateTemplate;
};

export {logoTemplate, playerWrapperTemplate, replayButtonTemplate, getStateTemplate};
