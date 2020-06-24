import React from "react";
import {
  Dimensions,
  ScrollView,
  StatusBar,
  Platform,
  View,
  Text
} from "react-native";
import { appStyles } from "../../../utils/appStyles";
import HTML from "react-native-render-html";

import Icon from "react-native-vector-icons/FontAwesome5";

const htmlContent = `
<div style="font-size: 2em;">
<p>The new owner of a bookshop is re-organising the current systems. This involves:</p>
<ul>
<li>Ordering and purchasing books from suppliers and paying them.</li>
<li>&nbsp;Selling books to customers.</li>
<li>Giving discounts to regular customers.</li>
<li>Paying staff.</li>
<li>Providing an online enquiry and order system.</li>
<li>Producing monthly and annual accounts.</li>
</ul>
<p>a) Draw a high-level dataflow diagram containing the main processes, external entities, and<br />data stores. <strong>(10 marks)</strong><br />b) Design a simple online enquiry screen that prospective customers could use to find a<br />required author, book title or type of book. <strong>(5 marks)</strong><br />c) Write brief notes on the following business system development methods:</p>
<ol style="list-style-type: lower-roman;">
<li>Agile.</li>
<li>Object-oriented.</li>
<li>Prototyping, <strong>(15 marks)</strong>.</li>
</ol>

<img src="https://i.imgur.com/dHLmxfO.jpg?2" />
</div>
`;

const { height, width } = Dimensions.get("window");
const ContentScreen = ({ navigation }) => {
  console.log(width);
  return (
    <>
      <StatusBar backgroundColor="#3E011C" barStyle={"light-content"} />

      <View
        style={{
          backgroundColor: appStyles.primary,
          height: width * 0.25,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingTop: Platform.OS === "ios" ? 15 : null
        }}
      >
        <Icon
          name="arrow-left"
          size={20}
          style={{
            opacity: 0.8,
            color: "#fff"
          }}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            color: "#fff",
            fontSize: 20
          }}
        >
          Selecting Colors
        </Text>
        <Icon
          name="comment"
          size={20}
          style={{
            opacity: 0.8,
            color: "#fff"
          }}
          onPress={() => navigation.navigate("Learning Discussion")}
        />
      </View>
      <ScrollView style={{ flex: 1, height: height - 66 }}>
        <HTML html={htmlContent} imagesMaxWidth={width} />
      </ScrollView>
    </>
  );
};

export default ContentScreen;
