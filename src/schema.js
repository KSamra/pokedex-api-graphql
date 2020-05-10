const { gql } = require('apollo-server');


const typeDefs = gql`
  type Query {
    hello: String 
    pokemons(
      pageSize: Int
      offset: Int
    ):PokemonConnection!
    pokemon(
      id: Int
      name: String
     ):Pokemon
  }

  type Pokemon {
    id: Int
    abilities: [String]
    against_bug: Int
    against_dark: Int
    against_dragon: Int
    against_electric: Int
    against_fairy: Int
    against_fight: Int
    against_fire: Int
    against_flying: Int
    against_ghost: Int
    against_grass: Int
    against_ground: Int
    against_ice: Int
    against_normal: Int
    against_poison: Int
    against_psychic: Int
    against_rock: Int
    against_steel: Int
    against_water: Int
    attack: Int
    base_egg_steps: Int
    base_happiness: Int
    base_total: Int
    capture_rate: String
    classification: String
    defense: Int
    experience_growth: Int
    height_m: Int
    hp: Int 
    japanese_name: String
    name: String
    percentage_male: Int
    photo: String
    pokedex_number: Int
    sp_attack: Int
    sp_defense: Int
    speed: Int
    type1: String
    type2: String
    weight_kg: Int
    generation: Int
    is_legendary: Int
  }

  type PokemonConnection {
    hasMore: Boolean!
    offset: Int!
    pokemons: [Pokemon]!
  }

`;

module.exports = typeDefs;