import {QuestionType} from './game.js';
import ArtistAnswer from './artist-answer.js';
import GenreAnswer from './genre-answer.js';

class AbstractQuestion {
  getAnswerList(loadedQuestion) {
    const isArtist = loadedQuestion.type === QuestionType.ARTIST;

    return loadedQuestion.answers.map((answer) => {
      if (isArtist) {
        return new ArtistAnswer(answer.title, answer.image.url);
      }

      return new GenreAnswer(answer.src, null);
    });
  };
}

export default AbstractQuestion;
