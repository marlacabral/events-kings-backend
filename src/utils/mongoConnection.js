const mongoose = require('mongoose');
const uri = process.env.CONEXAO_MONGO

function connectToDataBase(){
    mongoose
        .connect(uri, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database Connected")
    })
    .catch((err) => {
        console.log(err)
    });
};

module.exports = connectToDataBase;
