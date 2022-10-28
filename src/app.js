const express = require('express');

const projectRoutes = require('./routes/projects');
const tasksRoutes = require('./routes/tasks');

const app = express();
app.use(express.json());
app.use(projectRoutes);
app.use(tasksRoutes);

module.exports = app;
