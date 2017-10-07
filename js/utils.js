const getValueFromRange = (minValue, maxValue) => {
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
};

export {getValueFromRange};
