import React from "react";
import { View, Dimensions, ActivityIndicator } from "react-native";
import { Image, Overlay, Button, Icon } from "react-native-elements";

const { width } = Dimensions.get("window");

const GalleryComponent = props => {
  const [visible, setVisible, image] = props.data;
  return (
    <Overlay isVisible={visible} onBackdropPress={() => setVisible(false)}>
      <View
        style={{
          minHeight: 200,
          maxHeight: 450,
          width,
          alignItems: "center",
          paddingHorizontal: 20
        }}
      >
        <Image
          source={{
            uri: image
          }}
          resizeMode="cover"
          containerStyle={{
            height: 300,
            width: "100%"
          }}
          PlaceholderContent={
            <ActivityIndicator
              color="#490222"
              size="large"
              style={{
                height: 300
              }}
            />
          }
        />
        <Button
          containerStyle={{
            marginVertical: 10
          }}
          buttonStyle={{
            backgroundColor: "#490222"
          }}
          icon={
            <Icon
              name="file-download"
              size={15}
              color="white"
              style={{
                paddingRight: 5
              }}
            />
          }
          title="DOWNLOAD"
        />
        <Button
          containerStyle={{
            marginVertical: 10
          }}
          type="outline"
          buttonStyle={{
            borderColor: "#490222",
            minWidth: 140
          }}
          titleStyle={{
            color: "#490222"
          }}
          title="CLOSE"
          onPress={() => setVisible(false)}
        />
      </View>
    </Overlay>
  );
};

export default GalleryComponent;
