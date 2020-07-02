import React from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedbackComponent
} from "react-native";
import { appStyles } from "../../utils/appStyles";
import Icon from "react-native-vector-icons/FontAwesome5";

import { CheckBox, Card } from "react-native-elements";
import HeaderComponent from "../components/general/HeaderComponent";
import CustomCheckItem from "./CustomCheckItem";

const { height, width } = Dimensions.get("window");
const QuizScreen = ({ navigation }) => {
  return (
    <>
      <HeaderComponent navigation={navigation} text="Quiz" show={false} />
      <View
        style={{
          backgroundColor: "#fff",
          height: "20%",
          paddingHorizontal: 32
        }}
      >
        <Text
          style={{
            color: "rgba(40, 40, 40, 0.7)",
            fontStyle: "italic",
            marginVertical: 32,
            fontSize: 12
          }}
        >
          Question 1/10
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 50
          }}
        >
          Work low hanging fruit for dear hiring manager: how much bandwidth do
          you have. Where do we stand on the latest client ask make it more
          corporate please?
        </Text>
      </View>
      <Card
        containerStyle={{
          paddingHorizontal: 16,
          margin: 0,
          paddingTop: 20,
          backgroundColor: "#eee",

          height: height - width
        }}
        wrapperStyle={{}}
      >
        <CustomCheckItem />
        <CustomCheckItem />
        <CustomCheckItem />
      </Card>
      {/* <TouchableWithoutFeedbackComponent> */}
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 40
        }}
      >
        <Text
          style={{ color: appStyles.primary, marginRight: 14, fontSize: 16 }}
        >
          NEXT
        </Text>
        <Icon name="caret-right" color={appStyles.primary} size={20} />
      </View>
      {/* </TouchableWithoutFeedbackComponent> */}
    </>
  );
};

export default QuizScreen;
