import FileSystem from "expo-file-system";

const downloadAsset = async (url = "", cb) => {
  let result;
  const downloadResumable = FileSystem.createDownloadResumable(
    url,
    FileSystem.documentDirectory + `BCS-ME_${Date.now()}`,
    {},
    cb
  );

  try {
    const { uri } = await downloadResumable.downloadAsync();
    console.log("Finished downloading to ", uri);
    result = uri;
  } catch (e) {
    console.error(e);
  }

  return result;
};

export default downloadAsset;
