const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017";
const connect = async () => {
    try {
      const conn = await mongoose.connect(mongoURI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }); //sometime there is permission with mongodb, so we have to pass some json object.
      console.log(
        "connected with database"
      ); //.inverse to use the color package which will colored the background of this console line//.underline.yellow will make it underline and colored
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  };
module.exports = connect;