const renderTitle = (text = "") => {
  const splitText = text.split("/");

  const extractName = splitText[splitText.length - 1];

  const splitName = extractName.split(".");

  // remove extension

  const extractTitle = splitName[0];

  return extractTitle.length >= 20
    ? {
        displayText: `${extractTitle.substring(0, 20)}.${
          splitName[splitName.length - 1]
        }`,
        originalText: extractTitle.substring(0, 20)
      }
    : { displayText: splitName.join("."), originalText: extractTitle };
};

export { renderTitle };
