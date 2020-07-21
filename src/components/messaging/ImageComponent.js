import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import { Image, Tooltip } from "react-native-elements";
import ReadComponent from "./ReadComponent";
import GalleryComponent from "./GalleryComponent";
import downloadAsset from "../../../utils/downloadAsset";
import DownloadProgress from "./DownloadProgress";

const ImageComponent = ({ userId, ...props }) => {
  useEffect(() => {
    (async () => {
      const {
        status,
        canAskAgain
      } = await MediaLibrary.requestPermissionsAsync();
      if (status === "granted") {
        setHasPermission(true);
      } else if (status === "denied" && canAskAgain === true) {
        Alert.alert(
          "Gallery Permission Request",
          "Gallery permissions needed for app to function",
          [
            {
              text: "Ok",
              onPress: async () => await MediaLibrary.requestPermissionsAsync()
            }
          ]
        );
      } else {
        setHasPermission(false);
      }
    })();
  }, []);

  const tooltipRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [visible, setVisible] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [progressVisible, setProgressVisible] = useState(false);

  const callback = dp => {
    const progress = dp.totalBytesWritten / dp.totalBytesExpectedToWrite;
    setDownloadProgress(progress);
  };

  if (hasPermission === null) {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      const b = await MediaLibrary.getPermissionsAsync();
      console.log(b);
      setHasPermission(status === "granted");
    })();
  }
  if (hasPermission === false) {
    return <View />;
  }

  return (
    <>
      <TouchableWithoutFeedback
        onLongPress={() => {
          tooltipRef.current.toggleTooltip();
        }}
        onPress={() => setVisible(true)}
      >
        <View
          style={{
            padding: 10
          }}
        >
          <Tooltip
            ref={tooltipRef}
            toggleOnPress={false}
            popover={
              <Text
                onPress={async () => {
                  tooltipRef.current.toggleTooltip();
                  setProgressVisible(true);
                  const value = await downloadAsset(
                    "https://i.pinimg.com/originals/85/3f/af/853faf586b65a0ac4b63081404b186ce.gif",
                    callback
                  );

                  await MediaLibrary.saveToLibraryAsync(value);
                  setProgressVisible(false);

                  setDownloadProgress(0);
                  setTimeout(() => {
                    Alert.alert("Download Message", "download is complete", [
                      {
                        text: "Ok"
                      }
                    ]);
                  }, 200);
                }}
              >
                Download
              </Text>
            }
          >
            <Image
              source={{
                uri:
                  "https://i.pinimg.com/originals/85/3f/af/853faf586b65a0ac4b63081404b186ce.gif"
              }}
              style={{ width: 200, height: 200 }}
              resizeMode="cover"
              containerStyle={{
                marginBottom: 5,
                padding: 0
              }}
              PlaceholderContent={
                <ActivityIndicator
                  color="#490222"
                  size="large"
                  style={{
                    height: 200,
                    backgroundColor: "transparent"
                  }}
                />
              }
            />
          </Tooltip>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "flex-end"
            }}
          >
            <Text
              style={{
                color: userId !== 1 ? "#fafefe" : "#000",
                paddingRight: 5,
                fontSize: 10
              }}
            >
              {props.b}
            </Text>
            {userId !== 1 && <ReadComponent read={true} />}
          </View>
        </View>
      </TouchableWithoutFeedback>
      <GalleryComponent
        data={[
          visible,
          setVisible,
          "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
          callback,
          setProgressVisible,
          setDownloadProgress,
          hasPermission,
          setHasPermission
        ]}
      />
      <DownloadProgress
        data={[progressVisible, setProgressVisible, downloadProgress]}
      />
    </>
  );
};

export default ImageComponent;
