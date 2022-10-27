require('dotenv').config({ path: `${__dirname}/.env` });

const { SERVER_PORT, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST } =
  process.env;

const config = {
  port: +SERVER_PORT || 3000,
  postgres_db: POSTGRES_DB,
  postgres_user: POSTGRES_USER,
  postgres_password: POSTGRES_PASSWORD,
  postgres_host: POSTGRES_HOST
};

module.exports = config;
