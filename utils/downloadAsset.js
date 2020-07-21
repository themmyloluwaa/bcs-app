import * as FileSystem from "expo-file-system";
import { Alert } from "react-native";
const downloadAsset = async (url = "", cb) => {
  let extension = url.split(".");
  extension = extension[extension.length - 1];
  const downloadResumable = FileSystem.createDownloadResumable(
    url,
    FileSystem.documentDirectory + `BCS-ME_${Date.now()}.${extension}`,
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
