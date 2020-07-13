import React, { useEffect, useState } from "react";
import {
  View,
  Dimensions,
  Platform,
  ActivityIndicator,
  TouchableWithoutFeedback
} from "react-native";
import HeaderComponent from "../components/general/HeaderComponent";
import { Image, Button, Icon, Overlay } from "react-native-elements";
import { appStyles } from "../../utils/appStyles";
import * as ImageManipulator from "expo-image-manipulator";

import ImagePicker from "react-native-image-crop-picker";

const { height, width } = Dimensions.get("window");
const EditImage = ({ navigation, route }) => {
  const [photo, setPhoto] = useState({});
  const [rotateValue, setRotateValue] = useState(0);
  const [loading, setLoading] = useState(false);
  console.log(photo.uri);
  useEffect(() => {
    !!route.params && !!route.params.photo && setPhoto(route.params.photo);
  }, [route.params]);

  const handleRotate = async () => {
    setLoading(true);
    if (rotateValue >= 360) {
      const manipResult = await ImageManipulator.manipulateAsync(
        photo.uri || photo.localUri,
        [{ rotate: 90 }],
        { compress: 1, format: ImageManipulator.SaveFormat.PNG }
      );
      setPhoto(manipResult);

      setTimeout(() => setLoading(false), 250);
      return;
    }
    const manipResult = await ImageManipulator.manipulateAsync(
      photo.uri || photo.localUri,
      [{ rotate: rotateValue + 90 }],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );
    setPhoto(manipResult);
    setLoading(false);
    return;
  };

  const handleFlip = async (flip = "HORIZONTAL") => {
    setLoading(true);

    const manipResult = await ImageManipulator.manipulateAsync(
      photo.localUri || photo.uri,
      [
        {
          flip:
            flip === "HORIZONTAL"
              ? ImageManipulator.FlipType.Horizontal
              : ImageManipulator.FlipType.Vertical
        }
      ],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );
    setPhoto(manipResult);

    setTimeout(() => setLoading(false), 250);
  };

  const handleCrop = () => {
    setLoading(true);

    ImagePicker.openCropper({
      path: photo.uri,
      width: 300,
      height: 400
    })
      .then(image => {
        console.log(image);
      })
      .catch(e => console.log(e));

    setTimeout(() => setLoading(false), 250);
  };
  return (
    <>
      <HeaderComponent
        style={{
          backgroundColor: appStyles.primary,
          height: width * 0.25,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingTop: Platform.OS === "ios" ? 15 : null
        }}
        navigation={navigation}
        text="Edit this Image"
        show={false}
      />
      <View
        style={{
          backgroundColor: "#000",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
          height: "10%",
          zIndex: 9999999999
        }}
      >
        <TouchableWithoutFeedback onPress={() => handleCrop()}>
          <Icon color="#fff" name="crop" />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={async () => await handleRotate()}>
          <Icon color="#fff" name="rotate-90-degrees-ccw" />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={async () => await handleFlip("HORIZONTAL")}
        >
          <Icon color="#fff" name="flip" />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={async () => await handleFlip("VERTICAL")}
        >
          <Icon
            color="#fff"
            name="flip"
            containerStyle={{
              transform: [{ rotate: "90deg" }]
            }}
          />
        </TouchableWithoutFeedback>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "70%"
        }}
      >
        <Image
          source={{ uri: photo.uri }}
          style={{
            width: width,
            height: height,
            resizeMode: "contain"
          }}
          placeholderStyle={{
            height: height / 2,
            backgroundColor: "transparent",
            alignSelf: "center"
          }}
        />
      </View>
      <Button
        containerStyle={{
          marginVertical: 10,
          paddingHorizontal: 20
        }}
        buttonStyle={{
          backgroundColor: appStyles.primary,
          borderColor: appStyles.primary,
          height: 50
        }}
        title="Proceed"
        titleStyle={{
          color: appStyles.white
        }}
      />
      <Overlay
        isVisible={loading}
        fullScreen={true}
        overlayStyle={{
          backgroundColor: "transparent"
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
            flex: 1,
            zIndex: 999999999999
          }}
        >
          <ActivityIndicator
            size={Platform.OS === "ios" ? "large" : 100}
            color="#490222"
          />
        </View>
      </Overlay>
    </>
  );
};

export default EditImage;
