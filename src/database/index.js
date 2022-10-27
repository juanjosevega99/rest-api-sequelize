const { Sequelize } = require('sequelize');
const {
  postgres_db,
  postgres_user,
  postgres_password,
  postgres_host
} = require('../../config');

const sequelize = new Sequelize(postgres_db, postgres_user, postgres_password, {
  host: postgres_host,
  dialect: 'postgres'
});

module.exports = {
  sequelize
};
