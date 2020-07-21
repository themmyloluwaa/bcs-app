import * as FileSystem from "expo-file-system";
import { Alert } from "react-native";
const downloadAsset = async (url = "", cb, name = "") => {
  let title;

  if (name.length > 0) {
    title = name;
  } else {
    title = `BCS-ME_${Date.now()}`;
  }
  let extension = url.split(".");
  extension = extension[extension.length - 1];
  const downloadResumable = FileSystem.createDownloadResumable(
    url,
    FileSystem.documentDirectory + `${title}.${extension}`,
    {},
    cb
  );

  try {
    let result;

    const { uri } = await downloadResumable.downloadAsync();
    result = uri;

    return result;
  } catch (e) {
    // console.error(e);
    return Alert.alert("unable to download file");
  }
};

export default downloadAsset;
