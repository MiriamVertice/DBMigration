// db.js
require('dotenv').config();
const mysql = require('mysql2/promise');
const mongoose = require('mongoose');

async function connectMySQL() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });
  console.log('Conectado a MySQL');
  return connection;
}

async function connectMongo() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Conectado a MongoDB');
}

module.exports = { connectMySQL, connectMongo };
