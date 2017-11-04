import {QuestionType} from './game.js';
import ArtistQuestion from './artist-question.js';
import GenreQuestion from './genre-question.js';
import ArtistAnswer from './artist-answer.js';
import GenreAnswer from './genre-answer.js';

const getAnswerList = (loadedQuestion) => {
  const isArtist = loadedQuestion.type === QuestionType.ARTIST;

  return loadedQuestion.answers.map((answer) => {
    if (isArtist) {
      return new ArtistAnswer(answer.title, answer.image.url);
    }

    return new GenreAnswer(answer.src, null);
  });
};

const getArtistCorrectAnswer = (answers) => {
  const correctAnswer = answers.find((answer) => answer.isCorrect);

  return correctAnswer ? correctAnswer.title : ``;
};

const getGenreCorrectAnswer = (answers, genre) => {
  return answers
      .filter((answer) =>
        answer.genre === genre
      ).map((answer) =>
        answer.src
      );
};

// TODO: Удалить
// const createArtistQuestion = (loadedQuestion) => {
//   return {
//     type: loadedQuestion.type,
//     title: loadedQuestion.question,
//     song: {
//       src: loadedQuestion.src,
//       url: null
//     },
//     answerList: getAnswerList(loadedQuestion),
//     correctAnswer: getArtistCorrectAnswer(loadedQuestion.answers)
//   };
// };

// TODO: Удалить
// const createGenreQuestion = (loadedQuestion) => {
//   return {
//     type: loadedQuestion.type,
//     title: loadedQuestion.question,
//     answerList: getAnswerList(loadedQuestion),
//     correctAnswer: getGenreCorrectAnswer(loadedQuestion.answers, loadedQuestion.genre)
//   };
// };

const adaptQuestions = (loadedData) => {
  const adaptedQuestions = [];

  loadedData.forEach((loadedQuestion) => {
    if (loadedQuestion.type === QuestionType.ARTIST) {
      adaptedQuestions.push(new ArtistQuestion(loadedQuestion));
      return;
    }

    adaptedQuestions.push(new GenreQuestion(loadedQuestion));
  });

  return adaptedQuestions;
};

export default adaptQuestions;
