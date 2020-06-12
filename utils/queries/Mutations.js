import gql from "graphql-tag";

const LOGIN_MUTATION = gql`
  mutation login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      token
      user {
        isAdmin
        firstName
        lastName
        avatar
        accountType
        activated
        role
      }
    }
  }
`;

const CREATE_LEVEL_MUTATION = gql`
  mutation createLevel($name: String!) {
    createLevel(data: { name: $name }) {
      id
      name
      courses {
        name
      }
    }
  }
`;

const CREATE_COURSE_MUTATION = gql`
  mutation createCourse(
    $name: String!
    $description: String
    $code: String!
    $image: String!
    $levelId: Int!
  ) {
    createCourse(
      name: $name
      levelId: $levelId
      description: $description
      code: $code
      image: $image
    ) {
      id
      name
      image
      description
      topics {
        id
      }
    }
  }
`;

const CREATE_TOPIC_MUTATION = gql`
  mutation createTopic($name: String!, $description: String!, $courseId: Int!) {
    createTopic(courseId: $courseId, name: $name, description: $description) {
      id
      name
      description
      content {
        id
      }
    }
  }
`;

const CREATE_CONTENT_MUTATION = gql`
  mutation createContent(
    $topicId: Int!
    $title: String!
    $type: String!
    $body: String!
  ) {
    createContent(topicId: $topicId, title: $title, type: $type, body: $body) {
      id
      title
      type
      body
    }
  }
`;

const CREATE_QUIZ_MUTATION = gql`
  mutation createCourseQuiz(
    $topicId: ID!
    $score: Int!
    $question: String!
    $answer: String!
    $optionList: [QuizOptionInput!]
  ) {
    createCourseQuiz(
      topicId: $topicId
      score: $score
      question: $question
      answer: $answer
      optionList: $optionList
    ) {
      question {
        quiz {
          id
        }
        id
        question
        answer
        options {
          id
          name
        }
      }
    }
  }
`;

const CREATE_PAST_QUESTION = gql`
  mutation createCoursePastQuestion(
    $courseId: Int!
    $year: String!
    $name: String!
    $description: String!
    $question: PastQuestionInput!
    $answer: PastQuestionInput!
  ) {
    createCoursePastQuestion(
      courseId: $courseId
      year: $year
      name: $name
      description: $description
      question: $question
      answer: $answer
    ) {
      id
      name
      year
      description
      question {
        id
        title
        body
      }
      answer {
        id
        title
        body
      }
    }
  }
`;

const CREATE_PAST_QUESTION_QUESTION = gql`
  mutation createPastQuestionQuestion(
    $pastQuestionId: Int!
    $title: String!
    $body: String!
  ) {
    createPastQuestionQuestion(
      pastQuestionId: $pastQuestionId
      title: $title
      body: $body
    ) {
      title
    }
  }
`;

const CREATE_PAST_QUESTION_ANSWER = gql`
  mutation createPastQuestionAnswer(
    $pastQuestionId: Int!
    $title: String
    $body: String!
  ) {
    createPastQuestionAnswer(
      pastQuestionId: $pastQuestionId
      title: $title
      body: $body
    ) {
      title
    }
  }
`;

export {
  LOGIN_MUTATION,
  CREATE_LEVEL_MUTATION,
  CREATE_COURSE_MUTATION,
  CREATE_TOPIC_MUTATION,
  CREATE_CONTENT_MUTATION,
  CREATE_QUIZ_MUTATION,
  CREATE_PAST_QUESTION,
  CREATE_PAST_QUESTION_ANSWER,
  CREATE_PAST_QUESTION_QUESTION
};
