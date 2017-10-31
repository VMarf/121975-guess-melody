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
    const errorTooltip = document.createElement(`div`);
    const errorTooltipText = document.createElement(`span`);

    errorTooltip.appendChild(errorTooltipText);

    errorTooltip.classList.add(`request-error`);
    errorTooltipText.classList.add(`request-error__text`);
    errorTooltipText.textContent = message;

    document.body.insertAdjacentElement(`afterbegin`, errorTooltip);

    setTimeout(() => {
      errorTooltip.remove();
    }, 5000);
  }
}

export default Loader;
