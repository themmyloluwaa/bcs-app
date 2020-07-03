import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Dimensions
} from "react-native";

import { ListItem, Overlay, Button } from "react-native-elements";

import RNPickerSelect from "react-native-picker-select";

const source = require("../../assets/bg-img.png");

const { height } = Dimensions.get("window");

import Icon from "react-native-vector-icons/FontAwesome5";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item"
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baq",
    title: "Fourth Item"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f631",
    title: "Fifth Item"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d723i",
    title: "Sixth Item"
  },
  {
    id: "ad7acbea-c1b1-46c2-aed5-3ad53abb28baq",
    title: "Seventh Item"
  },
  {
    id: "5ac68afc-c605-48d3-a4f8-fbd91aa97f631",
    title: "Eight Item"
  },
  {
    id: "98694a0f-3da1-471f-bd96-145571e29d723i",
    title: "Ninth Item"
  }
];

const sports = [
  {
    label: "Football",
    value: "football"
  },
  {
    label: "Baseball",
    value: "baseball"
  },
  {
    label: "Hockey",
    value: "hockey"
  }
];

const ResourceScreen = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);

  const placeholderOne = {
    label: "Select a year",
    value: null,
    color: "rgba(53, 53, 53, 0.7)"
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 16, marginTop: 66 }}>
        <FlatList
          ListHeaderComponent={() => {
            return (
              <View style={{ marginBottom: 32 }}>
                <Text style={[styles.heading]}>Learning Resources</Text>
                <Text style={[styles.paragraph]}>
                  Choose a course below, select a year, and try your hands on
                  past questions from that year.
                </Text>
              </View>
            );
          }}
          data={DATA}
          renderItem={({ item, index }) => (
            <>
              <ListItem
                onPress={() => setIsVisible(true)}
                key={index}
                leftAvatar={{
                  source,
                  avatarStyle: { resizeMode: "cover", borderRadius: 5 },
                  containerStyle: {
                    height: "100%",
                    width: 96,
                    borderRadius: 5
                  },
                  rounded: false,
                  size: "large"
                }}
                title={item.title}
                containerStyle={{
                  marginBottom: 16,
                  maxHeight: 150,
                  height: 90,
                  padding: 0,
                  borderRadius: 5,
                  backgroundColor: "#fff"
                }}
                subtitle={
                  <View style={{ marginVertical: 10 }}>
                    <Text>7 Questions</Text>
                  </View>
                }
              />
            </>
          )}
        />
      </View>
      <Overlay
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
        width="auto"
        height="auto"
      >
        <View
          style={{
            width: 350,
            height: 250,
            borderTopEndRadius: 10,
            borderTopStartRadius: 10,
            borderBottomEndRadius: 10,
            borderBottomStartRadius: 10,
            justifyContent: "flex-start",
            paddingVertical: 16,
            paddingHorizontal: 24
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#353535",
              fontWeight: "bold",
              lineHeight: 38,
              height: "20%",
              width: "100%"
            }}
          >
            Hello from Overlayssssssssssssssss.
          </Text>
          <Text
            style={{
              fontWeight: "300",
              fontSize: 12,
              lineHeight: 18
            }}
          >
            Select a year from the drop-down below to view resources for this
            couse from that year.
          </Text>

          <View
            style={{
              marginTop: 24,
              marginBottom: 16
            }}
          >
            <RNPickerSelect
              placeholder={placeholderOne}
              items={sports}
              onValueChange={value => {}}
              style={{
                ...pickerSelectStyles,

                placeholder: {
                  color: "#000"
                }
              }}
              useNativeAndroidPickerStyle={false}
              Icon={() => {
                return (
                  <Icon
                    name="caret-down"
                    size={24}
                    color={"rgba(53, 53, 53, 0.7)"}
                    style={{
                      left: -15,
                      top: 10
                    }}
                  />
                );
              }}
            />
          </View>

          <Button
            title="PROCEED"
            icon={<Icon name="check" size={15} color="#490222" />}
            type="clear"
            containerStyle={{
              alignItems: "flex-end"
            }}
            titleStyle={{
              color: "#490222",
              marginLeft: 10,
              fontWeight: "bold"
            }}
            onPress={() => {
              setIsVisible(false);
              navigation.navigate("Resource Questions");
            }}
          />
        </View>
      </Overlay>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5"
  },
  white: {
    color: "#fff"
  },
  heading: {
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 58
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "normal",
    color: "color: rgba(40, 40, 40, 0.7)"
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    // borderColor: "#000",
    backgroundColor: "#F8F8F8",
    color: "rgba(53, 53, 53, 0.7)",
    marginHorizontal: 9,
    marginBottom: (height * 0.25) / 10,
    // paddingRight: 30,
    marginLeft: -5,

    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  inputAndroid: {
    fontSize: 16,
    marginHorizontal: 9,
    marginRight: -10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: (height * 0.25) / 10,
    borderWidth: 1,
    // borderColor: "#000",
    borderRadius: 8,
    color: "rgba(53, 53, 53, 0.7)",
    paddingRight: 30,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  }
});
export default ResourceScreen;
