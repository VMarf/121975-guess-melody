const getNode = (string) => {
  const node = document.createElement(`div`);

  node.innerHTML = string;

  return node.firstChild;
};

export default getNode;
