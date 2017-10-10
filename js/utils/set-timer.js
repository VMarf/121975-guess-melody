const setTimer = (seconds) => {
  if (seconds === 0) {
    return -1;
  }

  return {
    value: seconds,
    tick() {
      return this.value - 1;
    }
  };
};

export default setTimer;
