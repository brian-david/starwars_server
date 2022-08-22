//import { ApolloServer } from "apollo-server-express";
const { ApolloServer } = require("apollo-server");
//import typeDefs from "./schema";
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const SWAPI = require("./datasources/SWAPI");

const server = new ApolloServer({
  dataSources: () => ({
    swApi: new SWAPI(),
  }),
  typeDefs,
  resolvers,
});

server.listen(4000).then(() => {
  console.log("listening on 4000...");
});
