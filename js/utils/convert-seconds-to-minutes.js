const addZeroToNumber = (number) => {
  if (number > 9) {
    return number.toString();
  }

  return `0` + number;
};

const convertSecondsToMinutes = (seconds) => {
  const convertedMinutes = Math.floor(seconds / 60);
  const convertedSeconds = Math.floor(seconds % 60);

  return {
    minutes: addZeroToNumber(convertedMinutes),
    seconds: addZeroToNumber(convertedSeconds)
  };
};

export default convertSecondsToMinutes;
