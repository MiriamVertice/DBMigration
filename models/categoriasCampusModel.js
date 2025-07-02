const mongoose = require('mongoose');

const CategoriaCampusSchema = new mongoose.Schema({
   idCategoriasMysql: Number,
  denominacion: String
  
});

const CategoriaCampus = mongoose.model('CategoriaCampus', CategoriaCampusSchema);

module.exports = CategoriaCampus;
