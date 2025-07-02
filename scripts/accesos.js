require('dotenv').config();
const Acceso = require('../models/accesosModel');
const { connectMongo, connectMySQL } = require('../db');
 

async function migrarAccesos() {
  try {
    // Conectar a MySQL
    const mysqlConn = await connectMySQL();

    // Conectar a MongoDB
    await connectMongo();

    // Traer datos de MySQL
    const [rows] = await mysqlConn.query('SELECT * FROM accesos');

    // Guardar en MongoDB
    for (const row of rows) {
      const acceso = new Acceso({
        mysqlId: row.id,
        idUsuarioMysql: row.idUsuario,
        ip: row.IP,
        dirOrigen: row.dir_Origen,
        fecha: row.fecha,
      });
      await acceso.save();
      console.log(`Migrado acceso ID ${row.id}`);
    }

    await mysqlConn.end();
    console.log('Migración de accesos completada');
    process.exit(0);
  } catch (error) {
    console.error('Error migrando accesos:', error);
    process.exit(1);
  }
}

migrarAccesos();
