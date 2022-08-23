const { gql } = require("apollo-server");

const typeDefs = gql`
  type Homeworld {
    name: String!
  }

  type Person {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: Homeworld
  }

  type PeoplePage {
    count: Int
    next: String
    previous: String
    results: [Person]
  }

  type Query {
    peoplepage(pageId: ID): PeoplePage
  }
`;

module.exports = typeDefs;
