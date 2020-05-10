module.exports = {
  Query: {
    hello: () => "Hello World",
    pokemon: (_, {id, name}, {dataSources}) => dataSources.pokemonAPI.getPokemonById({id, name}),
    pokemons: (_,{pageSize=20, offset=0, type1, type2, generation, is_legendary},{dataSources}) => {
      console.log(`received request with pageSize=${pageSize} and offset=${offset}`);
      pageSize = (offset + pageSize) > 801 ? 801 - offset : pageSize;
      const pokemons = dataSources.pokemonAPI.getAllPokemon(pageSize, offset);
      return {
        pokemons, 
        offset: offset + pageSize,
        hasMore: offset < 801
      }
    }
  }
};