import React from "react";
import { Text, FlatList } from "react-native";

import { ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

const QuizComponent = props => {
  return (
    <FlatList
      data={props.DATA}
      renderItem={({ item }) => {
        return (
          <ListItem
            title={item.title}
            // rightIcon={() => (
            //   <Icon
            //     name="comment"
            //     size={16}
            //     style={{
            //       opacity: 0.8,
            //       color: "#FFA022",
            //       right: 30
            //     }}
            //   />
            // )}

            rightTitle="10/10"
            rightTitleStyle={{
              color: "#FFA022",
              fontSize: 14,
              right: 30
            }}
            bottomDivider
            containerStyle={{
              height: 70,
              maxHeight: "100%"
            }}
            titleStyle={{
              paddingBottom: 4,
              fontSize: 20
            }}
          />
        );
      }}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => (
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            padding: 10,
            color: "rgba(40, 40, 40, 0.5)"
          }}
        >
          Quizzes on this course
        </Text>
      )}
    />
  );
};

export default QuizComponent;
