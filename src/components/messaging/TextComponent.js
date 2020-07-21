import React, { useRef } from "react";
import { Text, View, Alert, TouchableWithoutFeedback } from "react-native";
import { Tooltip } from "react-native-elements";
import { copyText } from "../../../utils/clipboardUtil";
import ReadComponent from "./ReadComponent";
import Autolink from "react-native-autolink";
const TextComponent = ({ userId, ...props }) => {
  const tooltipRef = useRef(null);

  return (
    <TouchableWithoutFeedback
      onLongPress={() => {
        tooltipRef.current.toggleTooltip();
      }}
    >
      <View
        style={{
          padding: 20
        }}
      >
        <Tooltip
          ref={tooltipRef}
          toggleOnPress={false}
          popover={
            <Text
              onPress={() => {
                copyText("temi");
                Alert.alert("Feedback", "Copied to clipboard", [
                  {
                    text: "Ok",
                    onPress: () => tooltipRef.current.toggleTooltip()
                  }
                ]);
              }}
            >
              Copy
            </Text>
          }
        >
          <Text
            style={{
              color: userId !== 1 ? "#fff" : "#000",
              marginBottom: 10
            }}
          >
            <Autolink
              text="I am a software developer with 2+ years of experience building
        scalable applications with react and nodejs. I started working with
        nextjs late last year, and I am part of a team that has successfully
        built a product that's used by over 500 users who are increasing
        daily. I also work with nextjs in my personal projects. I recently
        worked on a graphql- apollo-next js implementation with subscription
        support. Link to apollo with nextjs subscription project
        https://with-apollo-subscription.now.sh/subscription. I also work
        with graphql and have successfully built graphql APIs following the
        schema first approach and the code first approach. Link to graphql
        project https://bcs-madeeasy-server.herokuapp.com/playground I am a
        passionate learner and one who continues to seek ways to improve as
        a developer and as a person. I believe you are looking for someone
        who can navigate seamlessly between the frontend and backend and who
        approaches development from a designer, developer, and, most
        importantly, a user perspective. This is my profile, and I look
        forward to hearing from you. Attached below are links to my projects
        with respect to your needs and my resume. Thank you very much.
        Philip

        +2347032343594
"
            />
          </Text>
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
  );
};

export default TextComponent;
