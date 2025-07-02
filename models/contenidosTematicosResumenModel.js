const mongoose = require('mongoose');

const contenidoTematicoResumenSchema = new mongoose.Schema({
    mysqlId: Number,
    mysqlFk: Number,
    mysqlFk2: Number,
    herramienta: String,
    referenciacim: String,
    codigotematico: String,
    tema: Number,
    nombre: String,
    paginas: Number,
    pantallas: Number,
    evaluacones: Number,
    temas: Number,
    ideasclaves: Number,
    audios: Number,
    videos: Number,
    descargas: Number,
    palabrasglosario: Number,
    urlPathCompleto: String,
    urlPathContenido: String,


});