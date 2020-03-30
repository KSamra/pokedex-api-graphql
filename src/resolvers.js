module.exports = {
  Query: {
    hello: () => "Hello World",
    pokemon: (_, {id}, {dataSources}) => dataSources.pokemonAPI.getPokemonById({id}),
    pokemons: (_,{pageSize=20, offset},{dataSources}) => {
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