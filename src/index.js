const app = require('./app');

const { sequelize } = require('./database/index');
const { port } = require('../config');

(async () => {
  try {
    await sequelize.sync({ force: false });
    console.info(`DB Connection has been established successfully`);
    app.listen(port);
    console.info(`Server running at ${port}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
