const mongoose = require('mongoose');

const accesosSchema = new mongoose.Schema({
    mysqlId: Number,
    idUsuarioMysql: Number,
    ip: String,
    dirOrigen: String,
    fecha: Date,
});

const Acceso = mongoose.model('Acceso', accesosSchema);
module.exports = Acceso;