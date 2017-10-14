import songs from './songs.js';

const initialState = {
  time: 5, // минуты
  notes: 3
};

const questions = [
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    song: songs[1].src,
    answerList: [songs[0], songs[1], songs[2]],
    correctAnswer: songs[1].artist
  },
  {
    type: `genre`,
    title: `Выберите кантри треки`,
    answerList: [songs[2], songs[3], songs[4], songs[5]],
    correctAnswer: songs[2]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    song: songs[0].src,
    answerList: [songs[0], songs[1], songs[2]],
    correctAnswer: songs[0].artist
  },
  {
    type: `genre`,
    title: `Выберите поп треки`,
    answerList: [songs[2], songs[3], songs[4], songs[5]],
    correctAnswer: songs[4]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    song: songs[2].src,
    answerList: [songs[0], songs[1], songs[2]],
    correctAnswer: songs[2].artist
  },
  {
    type: `genre`,
    title: `Выберите электронные треки`,
    answerList: [songs[2], songs[3], songs[4], songs[5]],
    correctAnswer: songs[5]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    song: songs[5].src,
    answerList: [songs[3], songs[4], songs[5]],
    correctAnswer: songs[5].artist
  },
  {
    type: `genre`,
    title: `Выберите джаз треки`,
    answerList: [songs[0], songs[1], songs[2], songs[3]],
    correctAnswer: songs[0]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    song: songs[4].src,
    answerList: [songs[3], songs[4], songs[5]],
    correctAnswer: songs[4].artist
  },
  {
    type: `genre`,
    title: `Выберите рок треки`,
    answerList: [songs[0], songs[1], songs[2], songs[3]],
    correctAnswer: songs[1]
  }
];

const currentPlayer = {
  score: 0,
  answers: [] // массив объектов, каждый объект содержит ключ correctly с значением true или false и ключ time с числовым значением в секундах (для работы с getPlayerScore)
};

const playersStats = [4, 5, 8, 10, 11, 15, 19];
