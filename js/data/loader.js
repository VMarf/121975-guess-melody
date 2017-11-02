import showError from '../templates/show-error.js';

const SERVER_URL = `https://es.dump.academy/guess-melody`;
const DEFAULT_USERNAME = `marfinvlad-id121975`;

class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Неизвестный статус (${response.status}) ${response.statusText}`);
      }
    });
  }

  // static loadSongs() {
  //   const promises = [];
  //
  //   promises.push(fetch(question.songSrc));
  //
  //   Promise.all(promises).then(() => {
  //     document.querySelector(`.js-main-start`).disabled = false;
  //   });
  // }

  static loadResults(username = DEFAULT_USERNAME) {
    return fetch(`${SERVER_URL}/stats/${username}`).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Неизвестный статус (${response.status}) ${response.statusText}`);
      }
    });
  }

  static saveResults(data, username = DEFAULT_USERNAME) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };

    return fetch(`${SERVER_URL}/stats/${username}`, requestSettings);
  }

  static onError(message) {
    showError(message);
  }
}

export default Loader;
