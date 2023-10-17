const { MongoClient } = require("mongodb");
let mongoose = require("mongoose");
require("dotenv").config();

// const mongoLiveURI = process.env.MONGODB_LINK;
// const mongoLiveURI="mongodb+srv://priyasingh:34priya@cluster0.kepu1bm.mongodb.net/Movie"
// console.log(mongoLiveURI)
const mongoLiveURI="mongodb://localhost:27017"

const connectToMongo = async () => {
  // Connecting to database using connection string
  await mongoose
    .connect(mongoLiveURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("Database connection error", err);
    });
};

exports.connection = connectToMongo;
