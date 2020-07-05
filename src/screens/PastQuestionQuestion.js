import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Platform,
  TouchableWithoutFeedback
} from "react-native";
import HeaderComponent from "../components/general/HeaderComponent";
import { Card, Divider, Icon, Overlay, Button } from "react-native-elements";
import HTML from "react-native-render-html";
import RNPickerSelect from "react-native-picker-select";
const { height, width } = Dimensions.get("window");

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: `<p>All information inside a computer is represented in the form of strings of 1s and 0s.</p>
    <p>There are many ways of representing numeric values in everyday life; for example,</p>
    <p>Integer 123</p>
    <p>Negative integer</p>
    <p>-32 Fraction 0.123</p>
    <p>Floating-point 1.124 x 10-6</p>
    <p>&nbsp;</p>
    <p>How is a computer able to represent each of these values in binary form? Explain the advantage and disadvantages of each system of numeric representation and its limitations. Your answer should include considerations such as word-length, accuracy, range, and the complexity of performing operations in each system.</p>
    <p style="text-align: right;"><strong>(30 Marks).</strong></p>`
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: `<ol style="list-style-type: lower-alpha;">
    <li>The inner (dot) product S of two vectors A and B is defined as S =&Sigma;a<sub>i</sub>&middot;b<sub>i</sub> for i = 0 to n-1; that is, S = a<sub>0&middot;</sub>b<sub>0</sub> + a<sub>1</sub>&middot;b<sub>1</sub> + &hellip; + a<sub>n-1</sub>&middot;b<sub>n-1</sub>.&nbsp;<br /><br />Assuming that vectors A and B are located in main memory, write an assembly language program to calculate S. Note that a vector is a sequence of consecutive values; for example, A = a<sub>0</sub>, a<sub>1</sub>, a<sub>2</sub>, &hellip; , a<sub>n-1</sub>. <br /><br />You may use any assembly language, although you must explain the action of each instruction you use. Your program should be documented.&nbsp;<strong>(20 Marks).</strong><br /><br /></li>
    <li>Year by year, microprocessors have become faster and faster. Part of the increase in speed is due to advances in semiconductor manufacturing technology and part of the increase in speed is due to advances in computer architecture and organization. <br /><br />Briefly explain two of the advances in computer architecture and organization that have significantly improved computer performance.&nbsp;<strong>(10 Marks).</strong></li>
    </ol>`
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: `
    <p>Computer languages can be divided into three fundamental categories:</p>
<ul>
<li>Assembly language (machine code)</li>
<li>High-level language (e.g., C, Java, Python)</li>
<li>Application-level language (e.g., Photoshop, PowerPoint, Solitaire, Excel)</li>
</ul>
<p>What are the differences between each of these three categories of computer language? Your answer should include a discussion of the broad characteristics of the languages in each of these categories.</p>
<p>You should also state the strengths and weaknesses of these languages and discuss their applications.</p>
<p style="text-align: right;"><strong>(30 Marks).</strong></p>
    `
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b1",
    title: `<p>All information inside a computer is represented in the form of strings of 1s and 0s.</p>
    <p>There are many ways of representing numeric values in everyday life; for example,</p>
    <p>Integer 123</p>
    <p>Negative integer</p>
    <p>-32 Fraction 0.123</p>
    <p>Floating-point 1.124 x 10-6</p>
    <p>&nbsp;</p>
    <p>How is a computer able to represent each of these values in binary form? Explain the advantage and disadvantages of each system of numeric representation and its limitations. Your answer should include considerations such as word-length, accuracy, range, and the complexity of performing operations in each system.</p>
    <p style="text-align: right;"><strong>(30 Marks).</strong></p>`
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6q",
    title: `<ol style="list-style-type: lower-alpha;">
    <li>The inner (dot) product S of two vectors A and B is defined as S =&Sigma;a<sub>i</sub>&middot;b<sub>i</sub> for i = 0 to n-1; that is, S = a<sub>0&middot;</sub>b<sub>0</sub> + a<sub>1</sub>&middot;b<sub>1</sub> + &hellip; + a<sub>n-1</sub>&middot;b<sub>n-1</sub>.&nbsp;<br /><br />Assuming that vectors A and B are located in main memory, write an assembly language program to calculate S. Note that a vector is a sequence of consecutive values; for example, A = a<sub>0</sub>, a<sub>1</sub>, a<sub>2</sub>, &hellip; , a<sub>n-1</sub>. <br /><br />You may use any assembly language, although you must explain the action of each instruction you use. Your program should be documented.&nbsp;<strong>(20 Marks).</strong><br /><br /></li>
    <li>Year by year, microprocessors have become faster and faster. Part of the increase in speed is due to advances in semiconductor manufacturing technology and part of the increase in speed is due to advances in computer architecture and organization. <br /><br />Briefly explain two of the advances in computer architecture and organization that have significantly improved computer performance.&nbsp;<strong>(10 Marks).</strong></li>
    </ol>`
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d7e",
    title: `
    <p>Computer languages can be divided into three fundamental categories:</p>
<ul>
<li>Assembly language (machine code)</li>
<li>High-level language (e.g., C, Java, Python)</li>
<li>Application-level language (e.g., Photoshop, PowerPoint, Solitaire, Excel)</li>
</ul>
<p>What are the differences between each of these three categories of computer language? Your answer should include a discussion of the broad characteristics of the languages in each of these categories.</p>
<p>You should also state the strengths and weaknesses of these languages and discuss their applications.</p>
<p style="text-align: right;"><strong>(30 Marks).</strong></p>
    `
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

function Item({ item, index, navigation }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Resource Answers")}
    >
      <Card containerStyle={styles.item}>
        <Text style={styles.title}>{index + 1}</Text>
        <HTML html={item.title} imagesMaxWidth={width} />
      </Card>
    </TouchableWithoutFeedback>
  );
}

const PastQuestionQuestion = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const placeholderOne = {
    label: "Select a month",
    value: null,
    color: "rgba(53, 53, 53, 0.7)"
  };
  return (
    <>
      <HeaderComponent
        navigation={navigation}
        text="Past Questions"
        route="Question Forum"
        show={true}
      />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item, index }) => (
            <Item item={item} index={index} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
          ListHeaderComponent={({ item }) => (
            <View
              style={{
                padding: 16
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  fontWeight: "300",
                  letterSpacing: 0.01,
                  color: "#282828"
                }}
              >
                Information Systems, March 2018
              </Text>
            </View>
          )}
        />
        <View
          style={{
            backgroundColor: "#eee",
            // borderTopWidth: 1,
            height: Platform.OS === "ios" ? "15%" : "17%",
            paddingHorizontal: 16
          }}
        >
          <Text
            style={{
              color: "#353535",
              paddingTop: 10,
              fontSize: 14,
              paddingBottom: 10
            }}
          >
            Tap a question to view the answer.
          </Text>
          <Divider style={{ height: 1.5, marginBottom: 5 }} />
          <Button
            title="CHANGE MONTH"
            containerStyle={[styles.buttonContainerStyle]}
            titleStyle={{
              color: "#fff"
            }}
            buttonStyle={{
              borderColor: "#fff",
              height: 48,
              color: "#fff",
              backgroundColor: "#490222",

              borderBottomWidth: 0.3,
              borderBottomEndRadius: 0
            }}
            disabled={disabled}
            disabledTitleStyle={{
              color: "#fff"
            }}
            onPress={() => {
              setIsVisible(true);
            }}
          />

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
                Select a month from the drop-down below to view resources for
                this couse from that year.
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
                        type="font-awesome"
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
        </View>
      </SafeAreaView>
    </>
  );
};

export default PastQuestionQuestion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    flex: 1
  },
  item: {
    backgroundColor: "#fff",
    // padding: 20,
    marginVertical: 10,
    marginHorizontal: 0
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  buttonContainerStyle: {
    alignSelf: "center",
    width: 330,
    marginVertical: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
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
