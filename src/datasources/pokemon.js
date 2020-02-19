const {DataSource} = require('apollo-datasource');

class PokemonAPI extends DataSource {
  constructor({store}) {
    super();
    this.store = store;
  }

  initialize(config){
    this.context = config.context;
  }

  async getAllPokemon(){
    
  }


}

module.exports = PokemonAPI;