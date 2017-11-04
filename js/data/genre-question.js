import AbstractQuestion from './abstract-question.js';

class GenreQuestion extends AbstractQuestion {
  constructor(loadedQuestion) {
    super(loadedQuestion);
    this.correctAnswer = this.getGenreCorrectAnswer(loadedQuestion.answers, loadedQuestion.genre);
  }

  getGenreCorrectAnswer(answers, genre) {
    return answers
        .filter((answer) =>
          answer.genre === genre
        ).map((answer) =>
          answer.src
        );
  }
}

export default GenreQuestion;
