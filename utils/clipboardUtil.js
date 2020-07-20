import { Clipboard } from "react-native";

const copyText = (text = "") => {
  Clipboard.setString(text);
};

const pasteText = async () => {
  const text = await Clipboard.getString();

  return text;
};

export { copyText, pasteText };
