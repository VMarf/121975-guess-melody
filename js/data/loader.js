import showError from '../templates/show-error.js';

const SERVER_URL = `https://es.dump.academy/guess-melody`;
const DEFAULT_USERNAME = `marfinvlad-id121975`;

class Loader {
  static async loadData() {
    const response = await fetch(`${SERVER_URL}/questions`);

    return response.json();
  }

  static async loadResults(username = DEFAULT_USERNAME) {
    const response = await fetch(`${SERVER_URL}/stats/${username}`);

    return response.json();
  }

  static async saveResults(data, username = DEFAULT_USERNAME) {
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
