import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Dimensions
} from "react-native";
import { Image, Tooltip, Overlay, Button, Icon } from "react-native-elements";
import ReadComponent from "./ReadComponent";
import GalleryComponent from "./GalleryComponent";

const ImageComponent = ({ userId, ...props }) => {
  const tooltipRef = useRef(null);
  const [visible, setVisible] = useState(false);

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
            popover={<Text>Download</Text>}
          >
            <Image
              source={{
                uri:
                  "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
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
                    height: 200
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
          "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
        ]}
      />
    </>
  );
};

export default ImageComponent;
