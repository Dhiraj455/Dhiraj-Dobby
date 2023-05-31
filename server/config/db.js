const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(
  process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log("Error connecting to database");
    console.log(err);
});

