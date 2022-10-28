const { Router } = require('express');

const { getProjects, createProjects } = require('../controllers/projects')

const router = Router();

router.get('/projects', getProjects);
// router.get('/projects', getProjects);
router.post('/projects', createProjects);
// router.put('/projects', getProjects);
// router.delete('/projects', getProjects);

module.exports = {
  router
};
