// Connect to mongoDB
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      autoIndex: false
    });
    console.log(`MongoDB connected: ${connect.connection.host}`.cyan);
  } catch (error) {
    console.error(`error`.red);
  }
};

module.exports = {connectDB};