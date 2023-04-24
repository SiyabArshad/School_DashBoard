const uri_conection = "mongodb+srv://userflasamepass:lyon2asse@cluster0.mizrnv2.mongodb.net/?retryWrites=true&w=majority";
  const mongoose = require("mongoose");

  function mongooseConnectDB() {
    mongoose
      .connect(uri_conection, {
        useNewUrlParser: true
      })
      .then((result) =>
        console.log("Mongoose connected to ", result.connections[0].host)
      )
      .catch((err) => console.log("error connecting to the database", err));
  }
  
  module.exports = mongooseConnectDB;