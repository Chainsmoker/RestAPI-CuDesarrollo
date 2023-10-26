const mongoose =  require('mongoose');

const programa_model = mongoose.Schema({
    MtM: [],
    Cod_Programa: {
        type: String,
        required: true
    },
    Nombre_Programa: {
        type: String,
        required: true
    },
    cursos: [],
    Fecha_inicio: {
        type: String,
        required: true
    },
    Fecha_Fin: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('programa', programa_model);