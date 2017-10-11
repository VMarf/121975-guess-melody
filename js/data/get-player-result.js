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

  // Так как мы меняем переданный в функцию массив, нужно его скопировать
  const playersStats = resultsOtherPlayers.slice();

  // Добавляем очки текущего игрока в конец общей статистики
  playersStats.push(resultCurrentPlayer.score);

  // Получаем число игроков, которых победил текущий игрок
  const currentPlayerIndex = playersStats.filter((playerStats) => playerStats < resultCurrentPlayer.score).length;

  // Получаем место, которое занял текущий игрок
  const currentPlayerPlace = playersStats.length - currentPlayerIndex;

  // Получаем количество побежденных игроков
  // Дополнительно умножаем на 100, так как выводим полученное число в процентах
  const defeatedPlayers = currentPlayerIndex / playersStats.length * 100;

  // Если игрок успешно закончил игру, возвращаем его результат
  return `Вы заняли ${currentPlayerPlace}-е место из ${playersStats.length} игроков. Это лучше чем у ${defeatedPlayers}% игроков.`;
};

export default getPlayerResult;
