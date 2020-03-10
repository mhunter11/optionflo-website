const { gql } = require('apollo-server');

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment!]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }

  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }

  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }

  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
    type: String
    stripeId: String
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Query {
    getPosts: [Post]
    getUser(userId: String!): User
    getPost(postId: ID!): Post
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String, password: String): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
    createSubscription(source: String!): User
  }
  type Subscription {
    newPost: Post!
  }
`;