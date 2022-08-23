const { RESTDataSource } = require("apollo-datasource-rest");

class SWAPI extends RESTDataSource {
  constructor() {
    super();
  }

  //this is the initial endpoint that call all the peoople from page one
  // this is the endpoint to get different pages -> https://swapi.dev/api/people/?page=3
  getAllPeople(pageId) {
    if (pageId) {
      return this.get(`https://swapi.dev/api/people?page=${pageId}`);
    }
    return this.get(`https://swapi.dev/api/people`);
  }

  getHomeworld(homeworld) {
    return this.get(`${homeworld}`);
  }
}

module.exports = SWAPI;
