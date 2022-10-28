const { Router } = require('express');

const {
  getProjects,
  createProjects,
  updateProject,
  deleteProject,
  getProject
} = require('../controllers/projects');

const router = Router();

router.get('/projects', getProjects);
router.get('/projects/:id', getProject);
router.post('/projects', createProjects);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);

module.exports = router;
