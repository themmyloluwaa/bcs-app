import React, { useState, useRef } from "react";
import { View, Text, TouchableWithoutFeedback, Alert } from "react-native";
import { Icon, Tooltip } from "react-native-elements";
import downloadAsset from "../../../utils/downloadAsset";
import DownloadProgress from "./DownloadProgress";
import { renderTitle } from "../../../utils/messagingHelpers";
import ReadComponent from "./ReadComponent";

import * as FileSystem from "expo-file-system";

const DocumentComponent = props => {
  const tooltipRef = useRef(null);
  const textMessage = renderTitle(
    "https://www.bcs.org/media/1225/heq-mar15-cert-cnt.pdf"
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
                const a = await FileSystem.getInfoAsync(
                  "file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540codekagei%252Fexpo-template-bare/heq-mar15-cert-cnt.pdf"
                );

                console.log(a);
                return;
                setProgressVisible(true);
                const value = await downloadAsset(
                  "https://www.bcs.org/media/1225/heq-mar15-cert-cnt.pdf",
                  callback,
                  textMessage.originalText
                );

                setProgressVisible(false);
                setDownloadProgress(0);
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
                    setTimeout(async () => {
                      setProgressVisible(true);
                      const value = await downloadAsset(
                        "https://www.bcs.org/media/1225/heq-mar15-cert-cnt.pdf",
                        callback,
                        textMessage.originalText
                      );

                      setProgressVisible(false);
                      setDownloadProgress(0);
                      setTimeout(() => {
                        Alert.alert("Download Message", "file downloaded", [
                          {
                            text: "Ok"
                          }
                        ]);
                      }, 200);
                    }, 200);
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
          <View
            style={{
              flexDirection: "row",
              alignSelf: "flex-end"
            }}
          >
            <Text
              style={{
                color: props.userId !== 1 ? "#fafefe" : "#000",
                paddingRight: 5,
                fontSize: 10
              }}
            >
              {props.b}
            </Text>
            {props.userId !== 1 && <ReadComponent read={true} />}
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
