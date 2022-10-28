const { Router } = require('express');

const {
  getProjects,
  createProjects,
  updateProject,
  deleteProject,
  getProject,
  getProjectTasks
} = require('../controllers/projects');

const router = Router();

router.get('/projects', getProjects);
router.get('/projects/:id', getProject);
router.post('/projects', createProjects);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);
router.get('/projects/:id/tasks', getProjectTasks);

module.exports = router;
