const mongoose = require("mongoose")
const Schema = mongoose.Schema

const contatoSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, //tipo de dado de id
        auto: true,
        required: true
    },
    nome: {
        type: String,
        required: true,
    },
    celular: {
        type: String,
        required: true,
    },
    dataNascimento: {
        type: Date,
        required: false,
    },
    fotoPerfil: {
        type: String, // aqui vai a URL da foto
        required: false,
    }
})


const contatoCollections = mongoose.model('contato', contatoSchema)

module.exports = contatoCollections