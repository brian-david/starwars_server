const { RESTDataSource } = require("apollo-datasource-rest");

class SWAPI extends RESTDataSource {
  constructor() {
    super();
  }

  getAllPeople() {
    //console.log(JSON.stringify(this.get("peoople").results));
    return this.get("https://swapi.dev/api/people");
  }

  getHomeworld(homeworld) {
    return this.get(`${homeworld}`);
  }

  getPeoplePage(endpoint) {
    return this.get(endpoint);
  }
}

module.exports = SWAPI;
