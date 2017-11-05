import {QuestionType} from './game.js';
import ArtistQuestion from './artist-question.js';
import GenreQuestion from './genre-question.js';

const adaptQuestions = (loadedData) => {
  return loadedData.map((loadedQuestion) => {
    if (loadedQuestion.type === QuestionType.ARTIST) {
      return new ArtistQuestion(loadedQuestion);
    }

    return new GenreQuestion(loadedQuestion);
  });
};

export default adaptQuestions;
