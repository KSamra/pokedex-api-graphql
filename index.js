const {connectDB} = require('./src/db/db');
const { ApolloServer } = require('apollo-server');
const {colors} = require('colors');

const resolvers = require('./src/resolvers');
const typeDefs = require('./src/schema');

const {Pokemon} = require('./src/models/Pokemon');

const createServer = async ({typeDefs, resolvers, dataSources}) => {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      dataSources: () => ({
        pokemonAPI: {}
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