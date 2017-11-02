const GameSettings = {
  MAX_GAME_TIME: 300, // секунды
  MAX_QUICK_ANSWER_TIME: 30, // секунды
  MIN_TIMER_DANGER_ZONE: 30, // секунды
  MAX_COUNT_NOTES: 3,
  MAX_COUNT_MISTAKES: 3,
  MAX_COUNT_ANSWERS: 10,
  MAX_COUNT_LEVELS: 10
};

const QuestionTypes = {
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

let questions = [];

const fillQuestions = (loadedData) => {
  questions = loadedData;
};

const getQuestions = () => questions;

const currentPlayer = {
  answers: [], // массив объектов, каждый объект содержит ключ correctly с значением true или false и ключ time с числовым значением в секундах
  resetToDefault() {
    this.answers = [];
  }
};

const playersStats = [4, 5, 8, 10, 11, 15, 19];

export {GameSettings, QuestionTypes, WordsVariants, initialState, fillQuestions, getQuestions, currentPlayer, playersStats};
