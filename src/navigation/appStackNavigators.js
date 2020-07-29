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

const LearningStackNavigator = createStackNavigator();
const ResourceStackNavigator = createStackNavigator();
const DiscussionNavigator = createStackNavigator();
const PastQuestionDiscussionNavigator = createStackNavigator();
const QuizNavigator = createStackNavigator();
const ChatNavigator = createStackNavigator();
const RequestNavigator = createStackNavigator();

const topicDicussionNavigator = () => (
  <DiscussionNavigator.Navigator>
    <DiscussionNavigator.Screen
      name="Topic Forum"
      component={DiscussionScreen}
    />
    <DiscussionNavigator.Screen
      name="Topic Thread"
      component={DiscussionThreadScreen}
    />
  </DiscussionNavigator.Navigator>
);

const pastQuestionDicussionNavigator = () => (
  <PastQuestionDiscussionNavigator.Navigator initialRouteName="Question Forum">
    <PastQuestionDiscussionNavigator.Screen
      name="Question Forum"
      component={PastQuestionDiscussionScreen}
    />
    <PastQuestionDiscussionNavigator.Screen
      name="Question Thread"
      component={PastQuestionDiscussionThreadScreen}
    />
  </PastQuestionDiscussionNavigator.Navigator>
);

const quizNavigator = () => (
  <QuizNavigator.Navigator initialRouteName="Quiz Question">
    <QuizNavigator.Screen name="Quiz Question" component={QuizScreen} />
    {/* <QuizNavigator.Screen name="Quiz Answer" component={QuizScreen} /> */}
    <QuizNavigator.Screen name="Quiz Final" component={QuizResultScreen} />
  </QuizNavigator.Navigator>
);

export const learningStackNavigator = () => (
  <LearningStackNavigator.Navigator>
    <LearningStackNavigator.Screen
      name="Resource Home"
      component={LearningScreen}
    />
    <LearningStackNavigator.Screen name="Course" component={CourseScreen} />
    <LearningStackNavigator.Screen name="Content" component={ContentScreen} />
    <LearningStackNavigator.Screen
      name="Learning Discussion"
      children={topicDicussionNavigator}
    />
    <LearningStackNavigator.Screen name="Quiz" children={quizNavigator} />
  </LearningStackNavigator.Navigator>
);

export const resourceStackNavigator = () => (
  <ResourceStackNavigator.Navigator>
    <ResourceStackNavigator.Screen
      name="Resource Home"
      component={ResourceScreen}
    />
    <ResourceStackNavigator.Screen
      name="Resource Questions"
      component={PastQuestionQuestion}
    />
    <ResourceStackNavigator.Screen
      name="Resource Answers"
      component={PastQuestionAnswer}
    />
    <ResourceStackNavigator.Screen
      name="Resource Discussions"
      children={pastQuestionDicussionNavigator}
    />
  </ResourceStackNavigator.Navigator>
);

export const chatNavigator = () => (
  <ChatNavigator.Navigator initialRouteName="Chats">
    <ChatNavigator.Screen name="Chats" component={ChatScreen} />
    <ChatNavigator.Screen name="Chatting" component={MessagesScreen} />
    <ChatNavigator.Screen
      name="Chats Reciever Profile"
      component={ChatScreen}
    />
  </ChatNavigator.Navigator>
);

export const requestNavigator = () => (
  <RequestNavigator.Navigator initialRouteName="Requests">
    <RequestNavigator.Screen name="Requests" component={RequestScreen} />
    <RequestNavigator.Screen
      name="Requests Chatting"
      component={RequestScreen}
    />
    <RequestNavigator.Screen
      name="Requests Reciever Profile"
      component={RequestScreen}
    />
  </RequestNavigator.Navigator>
);
