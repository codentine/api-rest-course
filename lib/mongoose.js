const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  })
  .then(() => {
    console.log("Mongodb is Connected");
  })
  .catch((err) => {
    console.error(err);
  });
