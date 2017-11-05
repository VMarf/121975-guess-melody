const GameSettings = {
  MAX_GAME_TIME: 300, // секунды
  MAX_QUICK_ANSWER_TIME: 30, // секунды
  MIN_TIMER_DANGER_ZONE: 30, // секунды
  MAX_COUNT_NOTES: 3,
  MAX_COUNT_MISTAKES: 3,
  MAX_COUNT_ANSWERS: 10,
  MAX_COUNT_LEVELS: 10
};

const QuestionType = {
  ARTIST: `artist`,
  GENRE: `genre`
};

const WordsVariants = {
  MINUTES: [`минуту`, `минуты`, `минут`],
  SECONDS: [`секунду`, `секунды`, `секунд`],
  SCORE: [`балл`, `балла`, `баллов`],
  FAST: [`быстрый`, `быстрых`, `быстрых`],
  MISTAKES: [`ошибку`, `ошибки`, `ошибок`]
};

export {GameSettings, QuestionType, WordsVariants};
