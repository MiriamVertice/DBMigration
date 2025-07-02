const mongoose = require('mongoose');

const scoResumenSchema = new mongoose.Schema({
    mysqlId: Number,
    mysqlFk: Number,
    mysqlFk2: Number,
    herramienta: String,
    referenciacim: String,
    codigo: String,
    nombre: String,
    paginas: Number,
    pantallas: Number,
    ejercicos: Number,
    evaluacones: Number,
    temas: Number,
    ideasclaves: Number,
    audios: Number,
    videos: Number,
    descargas: Number,
    palabrasglosario: Number,
    fechaVolcado: Date,
    fechaActualizacion: Date,
});
