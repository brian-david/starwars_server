const resolvers = {
  Query: {
    peoplepage: async (_, { pageId }, { dataSources }) => {
      return await dataSources.swApi.getAllPeople(pageId);
    },
  },
  Person: {
    homeworld: async ({ homeworld }, __, { dataSources }) => {
      return await dataSources.swApi.getHomeworld(homeworld);
    },
  },
};

module.exports = resolvers;
