import {QuestionType} from './game.js';

const getAnswerList = (loadedQuestion) => {
  const isArtist = loadedQuestion.type === QuestionType.ARTIST;

  return loadedQuestion.answers.map((answer) => {
    if (isArtist) {
      return {
        artist: answer.title,
        image: answer.image.url
      };
    }

    return {
      src: answer.src,
      url: null
    };
  });
};

const getArtistCorrectAnswer = (answers) => {
  return answers.reduce((correctAnswer, answer) => {
    if (answer.isCorrect) {
      return correctAnswer + answer.title;
    }

    return correctAnswer;
  }, ``);
};

const getGenreCorrectAnswer = (answers, genre) => {
  return answers.reduce((correctAnswer, answer) => {
    if (answer.genre === genre) {
      return correctAnswer.concat(answer.src);
    }

    return correctAnswer;
  }, []);
};

const createArtistQuestion = (loadedQuestion) => {
  return {
    type: loadedQuestion.type,
    title: loadedQuestion.question,
    song: {
      src: loadedQuestion.src,
      url: null
    },
    answerList: getAnswerList(loadedQuestion),
    correctAnswer: getArtistCorrectAnswer(loadedQuestion.answers),
  };
};

const createGenreQuestion = (loadedQuestion) => {
  return {
    type: loadedQuestion.type,
    title: loadedQuestion.question,
    answerList: getAnswerList(loadedQuestion),
    correctAnswer: getGenreCorrectAnswer(loadedQuestion.answers, loadedQuestion.genre)
  };
};

const adaptQuestions = (loadedData) => {
  const adaptedQuestions = [];

  loadedData.forEach((loadedQuestion) => {
    if (loadedQuestion.type === QuestionType.ARTIST) {
      adaptedQuestions.push(createArtistQuestion(loadedQuestion));
      return;
    }

    adaptedQuestions.push(createGenreQuestion(loadedQuestion));
  });

  return adaptedQuestions;
};

export default adaptQuestions;
