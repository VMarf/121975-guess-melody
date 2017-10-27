const getStrokeDashoffsetValue = (strokeDasharrayValue, maxGameTime, seconds) => {
  return strokeDasharrayValue * (maxGameTime - seconds) / maxGameTime;
};

export default getStrokeDashoffsetValue;
