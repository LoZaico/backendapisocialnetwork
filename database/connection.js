const mongoose = require("mongoose");

const connection = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/bd_redsocial");
        console.log("Conectado correctamente a la base de datos brou");
    } catch (error) {
      console.log(error);
      throw new error ("No se ha podido conectar a la base de datos bro");  
    }
}

module.exports = connection;