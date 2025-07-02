const mongoose = require('mongoose');

const ejerciciosSchema = new mongoose.Schema({
    mysqlId: Number,
    descrippcion: String,
    nombreEjercicio: String,
    userModification: String,
    fechaModificacion: Date,
});