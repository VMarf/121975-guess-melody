import AbstractQuestion from './abstract-question.js';

class ArtistQuestion extends AbstractQuestion {
  constructor(loadedQuestion) {
    super(loadedQuestion);
    this.song = {
      src: loadedQuestion.src,
      url: null
    };
    this.correctAnswer = this._getArtistCorrectAnswer(loadedQuestion.answers);
  }

  _getArtistCorrectAnswer(answers) {
    const correctAnswer = answers.find((answer) => answer.isCorrect);

    return correctAnswer ? correctAnswer.title : ``;
  }
}

export default ArtistQuestion;
