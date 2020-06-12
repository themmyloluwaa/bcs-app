import { createStackNavigator } from "@react-navigation/stack";
import LearningScreen from "../screens/appscreen/LearningScreen";

const LearningStackNavigator = createStackNavigator();
const ResourceStackNavigator = createStackNavigator();
const DiscussionNavigator = createStackNavigator();
const PastQuestionDiscussionNavigator = createStackNavigator();
const QuizNavigator = createStackNavigator();

const topicDicussionNavigator = () => (
  <DiscussionNavigator.Navigator>
    <DiscussionNavigator.Screen name="Topic Forum" />
    <DiscussionNavigator.Screen name="Topic Thread" />
  </DiscussionNavigator.Navigator>
);

const pastQuestionDicussionNavigator = () => (
  <PastQuestionDiscussionNavigator.Navigator>
    <PastQuestionDiscussionNavigator.Screen name="Question Forum" />
    <PastQuestionDiscussionNavigator.Screen name="Question Thread" />
  </PastQuestionDiscussionNavigator.Navigator>
);

const quizNavigator = () => (
  <QuizNavigator.Navigator>
    <QuizNavigator.Screen name="Quiz Question" />
    <QuizNavigator.Screen name="Quiz Answer" />
    <QuizNavigator.Screen name="Quiz Final" />
  </QuizNavigator.Navigator>
);

export const learningStackNavigator = () => (
  <LearningStackNavigator.Navigator>
    <LearningStackNavigator.Screen
      name="Resource Home"
      component={LearningScreen}
    />
    <LearningStackNavigator.Screen name="Course" component={LearningScreen} />
    <LearningStackNavigator.Screen name="Content" component={LearningScreen} />
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
