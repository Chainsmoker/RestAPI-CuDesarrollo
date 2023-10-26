const mongoose =  require('mongoose');

const usuario_model = mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    dni: {
        type: Number,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    contrasenia: {
        type: String,
        required: true
    },
    id_rol: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('usuario', usuario_model);