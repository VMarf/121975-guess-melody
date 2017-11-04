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

const initialState = {
  time: GameSettings.MAX_GAME_TIME,
  timer: null,
  mistakes: 0,
  level: 0,
  resetToDefault() {
    this.time = GameSettings.MAX_GAME_TIME;
    this.timer = null;
    this.mistakes = 0;
    this.level = 0;
  }
};

const currentPlayer = {
  answers: [], // массив объектов, каждый объект содержит ключ correctly с значением true или false и ключ time с числовым значением в секундах
  resetToDefault() {
    this.answers = [];
  }
};

export {GameSettings, QuestionType, WordsVariants, initialState, currentPlayer};
