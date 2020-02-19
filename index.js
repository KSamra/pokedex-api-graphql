const { ApolloServer } = require('apollo-server');
const {colors} = require('colors');

const createServer = async () => {
  try {
    const server = new ApolloServer({});
    const {url} = await server.listen();
    console.log(`🚀  Server ready at ${url}`.green);
  } catch (error) {
    console.error(`Server initialization failed!`.red);
    console.error(error);
  }
};

createServer();