const mongoose = require ('mongoose');
const { Schema } = mongoose;

const staffSchema = new Schema({
    name: {type: String, required: true},
    idade: {type: Number, required: true},
    email: {type: String, required: true},
    whatsapp: {type: Number, required: true},
    fone: {type: Number, required: true},
    rg: {type: Number, required: true},
    cpf: {type: Number, required: true},
    experienceEvents: {type: String, required: true},
    pic: {type: String, required: false},
    adress: {type: String, required: true},
    created: {type: Date, default: Date.now()}
});

const Colaborador = mongoose.model("Staff", staffSchema)

module.exports = Colaborador;
