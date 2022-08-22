const { ApolloServer } = require("apollo-server");
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

const { url, port } = await server.listen({port: process.env.PORT || 4000});
console.log(`
    🚀  Server is running
    🔉  Listening on port ${port}
    📭  Query at ${url}
  `);
}

startApolloServer(typeDefs, resolvers);
