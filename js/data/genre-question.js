import AbstractQuestion from './abstract-question.js';

class GenreQuestion extends AbstractQuestion {
  constructor(loadedQuestion) {
    super();
    this.type = loadedQuestion.type;
    this.title = loadedQuestion.question;
    this.answerList = this.getAnswerList(loadedQuestion);
    this.correctAnswer = this.getGenreCorrectAnswer(loadedQuestion.answers, loadedQuestion.genre);
  }

  getGenreCorrectAnswer (answers, genre) {
    return answers
    .filter((answer) =>
      answer.genre === genre
    ).map((answer) =>
      answer.src
    );
  };
}

export default GenreQuestion;
