import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LearningScreen from "../screens/appscreen/LearningScreen";
import ResourceScreen from "../screens/appscreen/ResourceScreen";

import ChatScreen from "../screens/messagescreen/ChatScreen";
import MessagesScreen from "../screens/messagescreen/MessagesScreen";
import RequestScreen from "../screens/messagescreen/RequestScreen";
import CourseScreen from "../screens/CourseScreen";
import DiscussionScreen from "../screens/DiscussionScreen";
import DiscussionThreadScreen from "../screens/DiscussionThreadScreen";
import ContentScreen from "../screens/learningscreen/ContentScreen";
import QuizScreen from "../screens/QuizScreen";
import QuizResultScreen from "../screens/QuizResultScreen";
import PastQuestionQuestion from "../screens/PastQuestionQuestion";
import PastQuestionAnswer from "../screens/PastQuestionAnswer";
import PastQuestionDiscussionScreen from "../screens/PastQuestionDiscussionScreen";
import PastQuestionDiscussionThreadScreen from "../screens/PastQuestionDiscussionThreadScreen";
// import PastQuestionAnswer from "../screens/PastQuestionAnswer";

const LearningContainerNavigator = createStackNavigator();
const ResourceContainerNavigator = createStackNavigator();
const DiscussionContainerNavigator = createStackNavigator();
const PastQuestionDiscussionContainerNavigator = createStackNavigator();
const QuizContainerNavigator = createStackNavigator();
const ChatContainerNavigator = createStackNavigator();
const RequestContainerNavigator = createStackNavigator();

const topicDicussionNavigator = () => (
  <DiscussionContainerNavigator.Navigator>
    <DiscussionContainerNavigator.Screen
      name="Topic Forum"
      component={DiscussionScreen}
    />
    <DiscussionContainerNavigator.Screen
      name="Topic Thread"
      component={DiscussionThreadScreen}
    />
  </DiscussionContainerNavigator.Navigator>
);

const pastQuestionDicussionNavigator = () => (
  <PastQuestionDiscussionContainerNavigator.Navigator initialRouteName="Question Forum">
    <PastQuestionDiscussionContainerNavigator.Screen
      name="Question Forum"
      component={PastQuestionDiscussionScreen}
    />
    <PastQuestionDiscussionContainerNavigator.Screen
      name="Question Thread"
      component={PastQuestionDiscussionThreadScreen}
    />
  </PastQuestionDiscussionContainerNavigator.Navigator>
);

const quizNavigator = () => (
  <QuizContainerNavigator.Navigator initialRouteName="Quiz Question">
    <QuizContainerNavigator.Screen
      name="Quiz Question"
      component={QuizScreen}
    />
    <QuizContainerNavigator.Screen
      name="Quiz Final"
      component={QuizResultScreen}
    />
  </QuizContainerNavigator.Navigator>
);

export const LearningStackNavigator = () => (
  <LearningContainerNavigator.Navigator>
    <LearningContainerNavigator.Screen name="Course" component={CourseScreen} />
    <LearningContainerNavigator.Screen
      name="Content"
      component={ContentScreen}
    />
    <LearningContainerNavigator.Screen
      name="Learning Discussion"
      children={topicDicussionNavigator}
    />
    <LearningContainerNavigator.Screen name="Quiz" children={quizNavigator} />
  </LearningContainerNavigator.Navigator>
);

export const ResourceStackNavigator = () => (
  <ResourceContainerNavigator.Navigator>
    <RequestContainerNavigator.Screen
      name="Resource Questions"
      component={PastQuestionQuestion}
    />
    <RequestContainerNavigator.Screen
      name="Resource Answers"
      component={PastQuestionAnswer}
    />
    <RequestContainerNavigator.Screen
      name="Resource Discussions"
      children={pastQuestionDicussionNavigator}
    />
  </ResourceContainerNavigator.Navigator>
);

export const chatNavigator = () => (
  <ChatContainerNavigator.Navigator initialRouteName="Chats">
    <ChatNavigator.Screen name="Chats" component={ChatScreen} />
    <ChatNavigator.Screen name="Chatting" component={MessagesScreen} />
    <ChatNavigator.Screen
      name="Chats Reciever Profile"
      component={ChatScreen}
    />
  </ChatContainerNavigator.Navigator>
);

export const requestNavigator = () => (
  <RequestContainerNavigator.Navigator initialRouteName="Requests">
    <RequestNavigator.Screen name="Requests" component={RequestScreen} />
    <RequestNavigator.Screen
      name="Requests Chatting"
      component={RequestScreen}
    />
    <RequestNavigator.Screen
      name="Requests Reciever Profile"
      component={RequestScreen}
    />
  </RequestContainerNavigator.Navigator>
);
