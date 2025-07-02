require('dotenv').config();
const { connectMySQL, connectMongo } = require('../db');
const CategoriasCampus = require('../models/categoriasCampusModel');

async function migrarCategorias() {
  try {
    const mysqlConn = await connectMySQL();
    await connectMongo();

    const [rows] = await mysqlConn.query('SELECT * FROM CategoriasCampusGv'); 

    for (const row of rows) {
      const categoria = new CategoriasCampus({
         idCategoriasMysql: row.IdCategorias,         
        denominacion: row.Denominacion,
      });

      await categoria.save();
      console.log(`Migrada categoría ID ${row.idCategorias}`);
    }

    await mysqlConn.end();
    console.log('Migración de categorías completada');
    process.exit(0);

  } catch (error) {
    console.error('Error migrando categorías:', error);
    process.exit(1);
  }
}

migrarCategorias();
