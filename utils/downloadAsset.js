import * as FileSystem from "expo-file-system";

const downloadAsset = async (url = "", cb) => {
  let extension = url.split(".");
  extension = extension[extension.length - 1];
  let result;
  const downloadResumable = FileSystem.createDownloadResumable(
    url,
    FileSystem.documentDirectory + `BCS-ME_${Date.now()}.${extension}`,
    {},
    cb
  );

  try {
    const { uri } = await downloadResumable.downloadAsync();
    result = uri;
  } catch (e) {
    console.error(e);
  }

  return result;
};

export default downloadAsset;
