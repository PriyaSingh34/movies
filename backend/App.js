// // backend/app.js
// const express = require("express");
// const cors = require("cors");
// const apiRoutes = require("./routes/Api");

// const app = express();
// const PORT = process.env.PORT || 5000;
// const {connection} = require("./db")
// const connectDB = () => {};

// app.use(cors());
// app.use(express.json());

// connection();

// app.use("/api", apiRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



// backend/app.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const apiRoutes = require("./routes/Api");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace with your MongoDB connection URL)
mongoose
  .connect("mongodb://127.0.0.1:27017/movies", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database connection error", err);
  });
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

