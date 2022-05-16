require('dotenv').config();
const { Sequelize } = require('sequelize');

const Role = require('../models/role');

/**
 * Database options
 */
const database = process.env.DB_NAME,
  username = process.env.DB_USERNAME,
  password = process.env.DB_PASSWORD,
  host = process.env.DB_HOST;

/**
 * Connectin config to database
 */
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true,
    },
  },
});

Role(sequelize, Sequelize);

/**
 * Sync database tables
 */
sequelize.sync({ force: true }).then(() => {
  console.log('All models were synchronized successfully.');
});

module.exports = sequelize;
