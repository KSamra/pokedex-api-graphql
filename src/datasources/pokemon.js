const {DataSource} = require('apollo-datasource');

const {Pokemon} = require('../models/Pokemon');

class PokemonAPI extends DataSource {
  constructor({store}) {
    super();
    this.store = store;
    
  }

  initialize(config){
    this.context = config.context;
  }

  async getAllPokemon(){
    try {
      const allPokemon = await this.store.find();
      return Array.isArray(allPokemon) ? allPokemon : []
    } catch (error) {
      console.error(error);
      return []
    }
  }

  async getPokemonById({id}) {
    try {
      const poke = await this.store.findById(id);
      return poke;
    } catch (error) {
      console.error(`Unable to find pokemon of id ${id}`);
      console.error(error);
      return {}
    }
  }

}

module.exports = PokemonAPI;