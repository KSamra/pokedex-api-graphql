module.exports = {
  Query: {
    hello: () => "Hello World",
    pokemon: (_, {id}, {dataSources}) => dataSources.pokemonAPI.getPokemonById({id})
    // pokemon: async (_, {id}, {models: {Pokemon}}) => {
    //   console.log('models----->',Pokemon);
    //   const pokemon = await Pokemon.findById(id);
    //   console.log(pokemon);
    //   return "Testing"
    // }
  }
};