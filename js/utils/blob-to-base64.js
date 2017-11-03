const blobToBase64 = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onloadend = (evt) => resolve(evt.currentTarget.result);
    reader.readAsDataURL(file);
  });
};

export default blobToBase64;
