require('dotenv').config();
const { connectMySQL, connectMongo } = require('../db');
const Usuario = require('../models/userModel');

async function migrarUsuarios() {
  try {
    // Conectar a MySQL
    const mysqlConn = await connectMySQL();

    // Conectar a MongoDB
    await connectMongo();

    // Obtener todos los usuarios de MySQL
    const [rows] = await mysqlConn.query('SELECT * FROM usuarios'); // Ajusta el nombre de la tabla si es diferente

    // Recorrer y guardar en MongoDB
    for (const row of rows) {
      const nuevoUsuario = new Usuario({
        mysqlId: row.id,           // Ajusta 'id' según tu nombre de campo PK en MySQL // Si no tienes FK, puedes pasar string vacío o eliminar este campo
        user: row.user,
        nombre: row.nombre,
        password: row.password,
        privilegio: row.privilegio,
        modoEditor: row.modoEditor,
        cliente: row.cliente,
        visible: row.visible,
      });

      await nuevoUsuario.save();
      console.log(`Migrado usuario ID ${row.id}`);
    }

    await mysqlConn.end();
    console.log('Migración de usuarios completada');
    process.exit(0);

  } catch (error) {
    console.error('Error migrando usuarios:', error);
    process.exit(1);
  }
}

migrarUsuarios();
