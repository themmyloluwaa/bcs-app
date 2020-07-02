import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LearningScreen from "../screens/appscreen/LearningScreen";

import ChatScreen from "../screens/messagescreen/ChatScreen";
import RequestScreen from "../screens/messagescreen/RequestScreen";
import CourseScreen from "../screens/CourseScreen";
import DiscussionScreen from "../screens/DiscussionScreen";
import DiscussionThreadScreen from "../screens/DiscussionThreadScreen";
// // import DiscussionScreenThread from "../screens/DiscussionScreenThread";
import ContentScreen from "../screens/learningscreen/ContentScreen";
import QuizScreen from "../screens/QuizScreen";
import QuizResultScreen from "../screens/QuizResultScreen";

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
  <PastQuestionDiscussionNavigator.Navigator>
    <PastQuestionDiscussionNavigator.Screen name="Question Forum" />
    <PastQuestionDiscussionNavigator.Screen name="Question Thread" />
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
      component={LearningScreen}
    />
    <ResourceStackNavigator.Screen
      name="Resource Questions"
      component={LearningScreen}
    />
    <ResourceStackNavigator.Screen
      name="Resource Answers"
      component={LearningScreen}
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
    <ChatNavigator.Screen name="Chats Chatting" component={ChatScreen} />
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
