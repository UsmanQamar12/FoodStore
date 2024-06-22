const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://Usman-Qamar:Usman%40321@cluster0.qujufvn.mongodb.net/Food-Store";

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true});

var db = mongoose.connection;

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
});
db.on('error' , ()=>{
    console.log(`Mongo DB Connection is failed`);

});
module.exports = mongoose;