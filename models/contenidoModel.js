const mongoose = require('mongoose');

const ContenidoSchema = new mongoose.Schema({
    mysqlId: Number,
    nombre: String,
    scos: String,
    orden: String,
    testFinal: String,
    prerequisites: String,
    estado: String,
    fechaModificacion: Date,
    categoriaCampus: Number,
    sinVideos: Boolean,
    userModificacion: String,
    fechaUltimaPublicacion: Date,
    fechaUltimaSincronizacion: Date,
    observaciones: String,

});

const Contenido = mongoose.model('Contenido', ContenidoSchema);

module.exports = Contenido;
