const mongoose = require('mongoose');

const contenidoResumenSchema = new mongoose.Schema({
    mysqlId: Number,
    idContenidoMysql: String,
    herramienta: String,
    codigo: String,
    referencia: String,
    nombre: String,
    paginas: Number,
    pantallas: Number,
    ejercicios: Number,
    evaluaciones: Number,
    temas: Number,
    ideasclaves: Number,
    audios: Number,
    videos: Number,
    descargas: Number,
    palabrasglosario: Number,
    urlPathCompleto: String,
    observaciones: String,

});

const ContenidoResumen = mongoose.model('ContenidoResumen', contenidoResumenSchema);

module.exports = ContenidoResumen;
