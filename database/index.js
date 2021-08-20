const pg = require('pg');
const Sequelize = require('sequelize');

const connection = new Sequelize('leverage', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
})

connection.authenticate()
  .then(() => console.log('***** Connected to PostgreSQL *****'))
  .catch(err => console.error(err))

module.exports = connection;