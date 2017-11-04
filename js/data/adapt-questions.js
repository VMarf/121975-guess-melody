import {QuestionType} from './game.js';
import ArtistQuestion from './artist-question.js';
import GenreQuestion from './genre-question.js';

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
