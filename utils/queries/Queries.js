import gql from "graphql-tag";

const ME_QUERY = gql`
  query {
    me {
      id
      firstName
      lastName
      otherName
      email
      phone
      avatar
      role
      isAdmin
      accountType
    }
  }
`;

const LEVEL_QUERY = gql`
  query {
    levels {
      id
      name
      courses {
        id
      }
    }
  }
`;

const COURSE_QUERY = gql`
  query {
    courses {
      id
      name
      topics {
        id
      }
    }
  }
`;

const COURSE_QUERY_BY_LEVEL = gql`
  query courses($levelId: Int!) {
    courses(where: { levelId: { equals: $levelId } }) {
      id
      name
      topics {
        id
      }
    }
  }
`;

const TOPIC_QUERY_BY_COURSE = gql`
  query topics($courseId: Int!) {
    topics(where: { courseId: { equals: $courseId } }) {
      id
      name
      description
      content {
        id
      }
    }
  }
`;

const TOPIC_QUERY = gql`
  query topics {
    topics {
      id
      name
      description
      content {
        id
      }
    }
  }
`;

const CONTENT_QUERY = gql`
  query contents($topicId: Int!) {
    contents(where: { topicId: { equals: $topicId } }) {
      id
      type
      title
      body
    }
  }
`;

const QUIZ_QUERY = gql`
  query quizzes($topicId: Int!) {
    quizzes(where: { topicId: { equals: $topicId } }) {
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

const PAST_QUESTION_QUERY = gql`
  query pastQuestions($courseId: Int!) {
    pastQuestions(where: { courseId: { equals: $courseId } }) {
      id
      name
      year {
        id
        year
      }
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

const PAST_QUESTION_YEAR_QUERY = gql`
  query pastQuestionYears {
    pastQuestionYears(orderBy: { year: asc }) {
      id
      year
      createdAt
    }
  }
`;

const PAST_QUESTION_QUERY_FILTER = gql`
  query pastQuestions($courseId: Int!, $yearId: Int!, $month: Month!) {
    pastQuestions(
      where: {
        AND: [
          { year: { id: { equals: $yearId } } }
          { courseId: { equals: $courseId } }
          { month: $month }
        ]
      }
      orderBy: { id: asc }
    ) {
      id
      name
    }
  }
`;

export {
  ME_QUERY,
  LEVEL_QUERY,
  COURSE_QUERY,
  COURSE_QUERY_BY_LEVEL,
  TOPIC_QUERY_BY_COURSE,
  TOPIC_QUERY,
  CONTENT_QUERY,
  QUIZ_QUERY,
  PAST_QUESTION_QUERY,
  PAST_QUESTION_YEAR_QUERY,
  PAST_QUESTION_QUERY_FILTER
};
