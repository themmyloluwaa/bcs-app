import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
  ActivityIndicator
} from "react-native";
import { appStyles } from "../../utils/appStyles";
import { Camera } from "expo-camera";
import HeaderComponent from "../components/general/HeaderComponent";
import { Icon, Image } from "react-native-elements";

const { height, width } = Dimensions.get("window");

const renderCamera = (ready = true, data = []) => {
  const [
    type,
    setCameraRef,
    cameraRef,
    navigation,
    setImage,
    loading,
    route,
    setLoading,
    setType
  ] = data;

  if (ready) {
    return (
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={ref => {
          setCameraRef(ref);
        }}
      >
        <View
          style={{
            backgroundColor: "transparent",
            height: "80%"
          }}
        ></View>
        <View
          style={{
            height: "20%",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 30,
            marginBottom: 50
          }}
        >
          <Icon
            type="antdesign"
            name="close"
            color="#fff"
            size={30}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <TouchableOpacity
            style={{ alignSelf: "center" }}
            onPress={async () => {
              setLoading(true);

              if (cameraRef) {
                let photo = await cameraRef.takePictureAsync({
                  base64: true,
                  exif: true,
                  skipProcessing: true
                });

                photo.type = type;

                setLoading(false);
                navigation.navigate("Edit Image", {
                  photo,
                  route: route.params.route
                });

                setImage(photo);
                //   console.log("photo", photo.base64);
              }
            }}
          >
            <View
              style={{
                borderWidth: 2,
                borderRadius: 100 / 2,
                borderColor: "white",
                height: 50,
                width: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  borderWidth: 2,
                  borderRadius: 100 / 2,
                  borderColor: "white",
                  height: 40,
                  width: 40,
                  backgroundColor: "white"
                }}
              ></View>
            </View>
          </TouchableOpacity>
          <Icon
            type="material"
            name="switch-camera"
            color="#fff"
            size={30}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          />
        </View>
        {loading && (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              flex: 1,
              zIndex: 999999999999
            }}
          >
            <ActivityIndicator
              size={Platform.OS === "ios" ? "large" : 100}
              color="#490222"
            />
          </View>
        )}
      </Camera>
    );
  }
  return null;
};

const CameraScreen = ({ navigation, route }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState({});
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setReady(true);
    });

    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      setReady(false);
    });

    return unsubscribe;
  }, [navigation]);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
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
        text="Take A Picture"
        show={false}
      />
      {renderCamera(ready, [
        type,
        setCameraRef,
        cameraRef,
        navigation,
        setImage,
        loading,
        route,
        setLoading,
        setType
      ])}
    </View>
  );
};

export default CameraScreen;
