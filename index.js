const {connectDB} = require('./src/db/db');
const { ApolloServer } = require('apollo-server');
const {colors} = require('colors');

const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});

const resolvers = require('./src/resolvers');
const typeDefs = require('./src/schema');

const {Pokemon} = require('./src/models/Pokemon');
const PokemonAPI = require('./src/datasources/pokemon');

const createServer = async () => {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      dataSources: () => ({
        pokemonAPI: new PokemonAPI({Pokemon})
      })
    });
    const {url} = await server.listen();
    console.log(`🚀  Server ready at ${url}`.green);
  } catch (error) {
    console.error(`Server initialization failed!`.red);
    console.error(error);
  }
};

connectDB();

createServer();