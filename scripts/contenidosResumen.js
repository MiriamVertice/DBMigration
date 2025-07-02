require('dotenv').config();
const { connectMySQL, connectMongo } = require('../db');
const ContenidoResumen = require('../models/contenidosResumenModel');

async function migrarContenidoResumen() {
  try {
    // Conectar a MySQL
    const mysqlConn = await connectMySQL();

    // Conectar a MongoDB
    await connectMongo();

    // Obtener todos los registros de la tabla correspondiente en MySQL
    const [rows] = await mysqlConn.query('SELECT * FROM ContenidosResumen'); 

    // Recorrer y guardar en MongoDB
    for (const row of rows) {
      const nuevoResumen = new ContenidoResumen({
        mysqlId: row.idContenido,     
        idContenidoMysql: row.idcontenido,    
        herramienta: row.herramienta,
        codigo: row.codigo,
        referencia: row.referencia,
        nombre: row.nombre,
        paginas: row.paginas,
        pantallas: row.pantallas,
        ejercicios: row.ejercicios,
        evaluaciones: row.evaluaciones,
        temas: row.temas,
        ideasclaves: row.ideasclaves,
        audios: row.audios,
        videos: row.videos,
        descargas: row.descargas,
        palabrasglosario: row.palabrasglosario,
        urlPathCompleto: row.urlPathCompleto,
        observaciones: row.observaciones,
      });

      await nuevoResumen.save();
      console.log(`Migrado resumen ID ${row.idcontenidosresumen}`);
    }

    // Cerrar conexión MySQL
    await mysqlConn.end();

    console.log('Migración de contenido resumen completada');
    process.exit(0);

  } catch (error) {
    console.error('Error migrando contenido resumen:', error);
    process.exit(1);
  }
}

migrarContenidoResumen();
