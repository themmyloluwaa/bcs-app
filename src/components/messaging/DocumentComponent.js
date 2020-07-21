import React, { useState, useRef } from "react";
import { View, Text, TouchableWithoutFeedback, Alert } from "react-native";
import { Icon, Tooltip } from "react-native-elements";
import downloadAsset from "../../../utils/downloadAsset";
import DownloadProgress from "./DownloadProgress";

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

const DocumentComponent = props => {
  const tooltipRef = useRef(null);
  const textMessage = renderTitle(
    "https://stackoverflow.com/questions/25077284/what-is-kcferrordomaincfnetwork-code-303.mp4"
  );
  const textColor = props.userId === 1 ? "#000" : "#fff";
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
      >
        <View
          style={{
            padding: 10
          }}
        >
          <View
            style={{
              height: 40,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
          >
            <Icon
              name="file-download"
              color={textColor}
              size={20}
              style={{
                // paddingHorizontal: 20
                paddingRight: 10
              }}
              onPress={async () => {
                setProgressVisible(true);
                const value = await downloadAsset(
                  "https://www.bcs.org/media/1225/heq-mar15-cert-cnt.pdf",
                  callback,
                  textMessage.originalText
                );

                setProgressVisible(false);
                setDownloadProgress(null);
                setTimeout(() => {
                  Alert.alert("Download Message", "file downloaded", [
                    {
                      text: "Ok"
                    }
                  ]);
                }, 500);
              }}
            />
            <Tooltip
              ref={tooltipRef}
              toggleOnPress={false}
              popover={
                <Text
                  onPress={async () => {
                    tooltipRef.current.toggleTooltip();
                    setProgressVisible(true);
                    const value = await downloadAsset(
                      "https://www.bcs.org/media/1225/heq-mar15-cert-cnt.pdf",
                      callback,
                      textMessage.originalText
                    );

                    setTimeout(() => {
                      setProgressVisible(false);
                      setDownloadProgress(null);
                      Alert.alert("Download Message", "file downloaded", [
                        {
                          text: "Ok"
                        }
                      ]);
                    }, 500);
                  }}
                >
                  Download
                </Text>
              }
            >
              <Text
                style={{
                  fontSize: 15,
                  color: textColor
                }}
              >
                {textMessage.displayText}
              </Text>
            </Tooltip>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <DownloadProgress
        data={[progressVisible, setProgressVisible, downloadProgress]}
      />
    </>
  );
};

export default DocumentComponent;
