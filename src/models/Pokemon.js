const mongoose = require('mongoose');

module.exports.createModel = () => {
  const PokemonSchema = new mongoose.Schema({
    _id: Number,
    abilities: [String],
    against_bug: Number,
    against_dark: Number,
    against_dragon: Number,
    against_electric: Number,
    against_fairy: Number,
    against_fight: Number,
    against_fire: Number,
    against_flying: Number,
    against_ghost: Number,
    against_grass: Number,
    against_ground: Number,
    against_ice: Number,
    against_normal: Number,
    against_poison: Number,
    against_psychic: Number,
    against_rock: Number,
    against_steel: Number,
    against_water: Number,
    attack: Number,
    base_egg_steps: Number,
    base_happiness: Number,
    base_total: Number,
    capture_rate: String,
    classification: String,
    defense: Number,
    experience_growth: Number,
    height_m: Number,
    hp: Number, 
    japanese_name: String,
    name: String,
    percentage_male: Number,
    photo: {
      type: String,
      default: 'none.jpg'
    },
    pokedex_number: Number,
    sp_attack: Number,
    sp_defense: Number,
    speed: Number,
    type1: String,
    type2: String,
    weight_kg: Number,
    generation: Number,
    is_legendary: Number
  });

  // Construct the image url before saving
  PokemonSchema.pre('save', function (next) {
    let num = ``;
    if (this.pokedex_number < 10) {
      num = `00${this.pokedex_number.toString()}`;
    }
    if (this.pokedex_number < 100 && this.pokedex_number >= 10) {
      num = `0${this.pokedex_number.toString()}`;
    }
    if (this.pokedex_number > 99) {
      num = this.pokedex_number.toString();
    }
    const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${num}.png`
    console.log(url);
    this.photo = url;
    this._id = this.pokedex_number;
    next();
  });

  const Pokemon = mongoose.model('Pokemon', PokemonSchema);

  return Pokemon;
}
  