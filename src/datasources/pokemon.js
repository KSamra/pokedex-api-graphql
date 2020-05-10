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

  async getAllPokemon(limit, after){
    try {
      const allPokemon = await this.store.find().skip(after).limit(limit);
      return Array.isArray(allPokemon) ? allPokemon : [];
    } catch (error) {
      console.error(error);
      return []
    }
  }

  async getPokemonById({id, name}) {
    try {
      let pokemon = {};
      console.log(`received arguments ${id} and ${name}`);
      if (id){
        pokemon = await this.store.findById(id);
        return pokemon;
      }
      if (name){
        let first = name.slice(0,1).toUpperCase();
        let rest = name.slice(1).toLowerCase();
        let query = first + rest; 
        pokemon = await this.store.findOne({'name': query});
      } 
      return pokemon;
    } catch (error) {
      console.error(`Unable to find pokemon of id ${id} or name=${name}`);
      console.error(error);
      return {}
    }
  }

}

module.exports = PokemonAPI;