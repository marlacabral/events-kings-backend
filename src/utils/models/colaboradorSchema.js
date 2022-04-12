const mongoose = require ('mongoose');
const { Schema } = mongoose;

const staffSchema = new Schema({
    name: {type: String, required: true},
    idade: {type: String, required: true},
    email: {type: String, required: true},
    whatsapp: {type: String, required: true},
    fone: {type: String, required: true},
    rg: {type: String, required: true},
    cpf: {type: String, required: true},
    experienceEvents: {type: String, required: true},
    pic: {type: String, required: false},
    adress: {type: String, required: true},
    created: {type: Date, default: Date.now()}
});

const Colaborador = mongoose.model("Staff", staffSchema)

module.exports = Colaborador;
