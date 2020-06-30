// const mongoose = require("mongoose");
// const { MONGO_URI } = require("../config");

// const config = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// mongoose.connect(MONGO_URI, config);

// module.exports = mongoose;

const mongoose = require("mongoose");
const URI =
  "mongodb+srv://avinash123:avinash123@media-qedo0.mongodb.net/appdata?retryWrites=true&w=majority";

const mongoosedb = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });
  console.log("Db is connected..!");
};

module.exports = mongoosedb;
