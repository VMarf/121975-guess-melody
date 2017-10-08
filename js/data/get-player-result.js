const getPlayerResult = (resultsOtherPlayers, resultCurrentPlayer) => {

  // Пример resultCurrentPlayer
  //
  // {
  //   score: 10,
  //   remainingNotes: 1,
  //   remainingTime: 60 (секунды)
  // }

  // Если у игрока кончилось время
  if (resultCurrentPlayer.remainingTime === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии.`;
  }

  // Если у игрока кончились ноты
  if (resultCurrentPlayer.remainingNotes < 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  const playersStats = resultsOtherPlayers.slice();

  // Добавляем очки текущего игрока в конец общей статистики и сортируем по возрастанию (функцию для sort взял с learn js)
  playersStats.push(resultCurrentPlayer.score);
  playersStats.sort((a, b) => {
    return a - b;
  });

  const currentPlayerIndex = playersStats.indexOf(resultCurrentPlayer.score);
  const currentPlayerPlace = playersStats.length - currentPlayerIndex;
  const defeatedPlayers = currentPlayerIndex / playersStats.length;

  return `Вы заняли ${currentPlayerPlace}-е место из ${playersStats.length} игроков. Это лучше чем у ${defeatedPlayers}% игроков.`;
};

export default getPlayerResult;
