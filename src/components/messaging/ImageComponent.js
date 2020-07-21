import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Dimensions,
  Alert
} from "react-native";
import { Image, Tooltip, Overlay, Button, Icon } from "react-native-elements";
import ReadComponent from "./ReadComponent";
import GalleryComponent from "./GalleryComponent";
import downloadAsset from "../../../utils/downloadAsset";
import DownloadProgress from "./DownloadProgress";

const ImageComponent = ({ userId, ...props }) => {
  const tooltipRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [progressVisible, setProgressVisible] = useState(false);

  const callback = dp => {
    const progress = dp.totalBytesWritten / dp.totalBytesExpectedToWrite;
    setDownloadProgress(progress);
  };

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
                  setProgressVisible(false);

                  setDownloadProgress(null);
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
                  "file:///Users/developer/Library/Developer/CoreSimulator/Devices/E488FD70-3257-4E23-92B7-F245F2D59426/data/Containers/Data/Application/DC343C86-F2C2-46A8-B572-02AA35572D52/Documents/ExponentExperienceData/%2540codekagei%252Fexpo-template-bare/BCS-ME_1595280064869"
                // "https://i.pinimg.com/originals/85/3f/af/853faf586b65a0ac4b63081404b186ce.gif"
              }}
              style={{ width: 200, height: 200 }}
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
          callback
        ]}
      />
      <DownloadProgress
        data={[progressVisible, setProgressVisible, downloadProgress]}
      />
    </>
  );
};

export default ImageComponent;
