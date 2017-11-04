import AbstractQuestion from './abstract-question.js';

class ArtistQuestion extends AbstractQuestion {
  constructor(loadedQuestion) {
    super();
    this.type = loadedQuestion.type;
    this.title = loadedQuestion.question;
    this.song = {
      src: loadedQuestion.src,
      url: null
    };
    this.answerList = this.getAnswerList(loadedQuestion);
    this.correctAnswer = this.getArtistCorrectAnswer(loadedQuestion.answers);
  }

  static getArtistCorrectAnswer (answers) {
    const correctAnswer = answers.find((answer) => answer.isCorrect);

    return correctAnswer ? correctAnswer.title : ``;
  };
}

export default ArtistQuestion;
