const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
 mysqlId:Number,
  user: String,
  nombre: String,
  password: String,
  privilegio: Number,
  modoEditor:String,
  cliente: String,
  visible:Number
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;
