module.exports = {
  Query: {
    hello: () => "Hello World",
    pokemon: (_, {id}, {dataSources}) => dataSources.pokemonAPI.getPokemonById({id}),
    pokemons: (_,__,{dataSources}) => dataSources.pokemonAPI.getAllPokemon()
  }
};