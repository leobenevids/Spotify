const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect("mongodb://localhost:27017/spotify", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.Promise = global.Promise;
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
