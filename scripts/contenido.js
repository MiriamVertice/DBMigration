require('dotenv').config();
const { connectMySQL, connectMongo } = require('../db');
const Contenido = require('../models/contenidoModel');

async function migrarContenido() {
  try {
    // Conectar a MySQL
    const mysqlConn = await connectMySQL();

    // Conectar a MongoDB
    await connectMongo();

    // Obtener todos los registros de la tabla correspondiente en MySQL
    const [rows] = await mysqlConn.query('SELECT * FROM contenido'); 

    // Recorrer y guardar en MongoDB
    for (const row of rows) {
      const nuevoContenido = new Contenido({
        mysqlId: row.idContenido,                    
        nombre: row.nombre,
        scos: row.scos,
        orden: row.orden,
        testFinal: row.testFinal,
        prerequisites: row.prerequisites,
        estado: row.estado,
        fechaModificacion: row.fechamodificacion,
        categoriaCampus: row.categoriaCampusGV,
        sinVideos: Boolean(row.sinVideos),
        userModificacion: row.usermodificacion,
        fechaUltimaPublicacion: row.fechaultimapublicacion,
        fechaUltimaSincronizacion: row.fechaultimasincronizacion,
        observaciones: row.observaciones,
      });

      await nuevoContenido.save();
      console.log(`Migrado contenido ID ${row.idContenido}`);
    }

    // Cerrar conexión MySQL
    await mysqlConn.end();

    console.log('Migración de contenidos completada');
    process.exit(0);

  } catch (error) {
    console.error('Error migrando contenidos:', error);
    process.exit(1);
  }
}

migrarContenido();
