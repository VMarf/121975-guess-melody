const getPlayerResult = (resultsOtherPlayers, resultCurrentPlayer) => {

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
  const defeatedPlayers = Math.trunc(currentPlayerIndex / playersStats.length * 100);

  return {
    playersStats,
    currentPlayerPlace,
    defeatedPlayers
  };
};

export default getPlayerResult;
