const resolvers = {
  Query: {
    peoplepage: async (_, __, { dataSources }) => {
      return await dataSources.swApi.getAllPeople();
    },
  },
  Person: {
    homeworld: async ({ homeworld }, __, { dataSources }) => {
      return await dataSources.swApi.getHomeworld(homeworld);
    },
  },
};

module.exports = resolvers;
