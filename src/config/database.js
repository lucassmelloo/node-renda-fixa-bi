const Sequelize = require('sequelize');

const dotenv = require('dotenv');
dotenv.config()

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql' 
  }
);

try {
  connection.authenticate();
  console.log('Conexão com o DB relizada.');
} catch (error) {
  throw new Error('Conexão com o banco de dados nao realizada: ' + error);
}

module.exports = connection;