import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  SectionList
} from "react-native";
import { Divider, ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { appStyles } from "../../../utils/appStyles";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];
const source = require("../../assets/target_monochromatic.png");

const Item = ({ title, navigation }, i) => (
  // <View style={styles.item}>
  //   <Text style={styles.title}>{title}</Text>
  <ListItem
    title={title}
    subtitle="16 topics * 5 resources"
    rightIcon={() => (
      <Icon
        name="arrow-right"
        size={16}
        color={appStyles.primary}
        style={{
          opacity: 0.8
        }}
      />
    )}
    containerStyle={{
      borderBottomEndRadius: 8,
      borderTopStartRadius: 8,
      borderBottomStartRadius: 8,
      borderTopEndRadius: 8,
      height: 90,
      maxHeight: "100%",
      elevation: 5,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 1,
      marginBottom: 16
    }}
    leftAvatar={{
      source: source,
      containerStyle: {
        width: 50,
        height: 50,
        borderBottomEndRadius: 5,
        borderTopStartRadius: 5,
        borderBottomStartRadius: 5,
        borderTopEndRadius: 5,
        backgroundColor: "black"
      },
      avatarStyle: {
        borderRadius: 0
      }
    }}
    titleStyle={{
      paddingBottom: 4,
      fontSize: 20
    }}
  />
  // </View>
);

const ListHeaderComponent = () => (
  <View style={styles.textContainer}>
    <Text
      style={{
        fontWeight: "500",
        fontSize: 30,
        marginTop: 40,
        lineHeight: 29
      }}
    >
      Hello, Suileman
    </Text>
    <Text
      style={{
        fontWeight: "normal",
        fontSize: 20,
        color: "rgba(40, 40, 40, 0.7)",
        lineHeight: 18,
        paddingTop: 10,
        marginBottom: -10
      }}
    >
      What would you like to learn today?
    </Text>
  </View>
);
const LearningScreen = props => {
  return (
    // <Layout>
    <SafeAreaView style={styles.welcomeContainer}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ ...b }) => {
          return (
            <>
              <Item title={b.item} navigation={props.navigation} />
            </>
          );
        }}
        renderSectionHeader={({ section: { title } }) => (
          <View
            style={{
              paddingTop: 16
            }}
          >
            <Text style={styles.header}>{title}</Text>
            <Divider style={{ backgroundColor: "black", marginBottom: 16 }} />
          </View>
        )}
        ListHeaderComponent={() => ListHeaderComponent()}
        stickySectionHeadersEnabled={false}
      />
    </SafeAreaView>

    // <View >

    //   <FlatList
    //     keyExtractor={keyExtractor}
    //     data={list}
    //     renderItem={renderItem}
    //   />
    // </Vie>
    // </Layout>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    // justifyContent: "center",
    // alignItems: "flex-start",
    // flex: 1,
    paddingTop: 80,
    // backgroundColor: "#E5E5E5",
    // paddingHorizontal: 16,
    // color: "rgba(40, 40, 40, 0.7)"
    flex: 1,
    // marginTop: Constants.statusBarHeight,
    marginHorizontal: 16
  },
  textContainer: {
    marginBottom: 32,
    // backgroundColor: "green",
    paddingVertical: 10,
    width: "100%"
  },
  item: {
    // backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 28,
    paddingBottom: 5
  },
  title: {
    fontSize: 24
  }
});

export default LearningScreen;
