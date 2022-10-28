const app = require('./app');

const { sequelize } = require('./database/index');
const { port } = require('../config');
require('./models/Project');
require('./models/Task');

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.info(`DB Connection has been established successfully`);
    app.listen(port);
    console.info(`Server running at ${port}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
