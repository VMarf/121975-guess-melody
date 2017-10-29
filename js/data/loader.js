const SERVER_URL = `https://es.dump.academy/guess-melody`;

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
