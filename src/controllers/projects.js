const { Project } = require('../models/Project');
const { Task } = require('../models/Task');

const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getProject = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findOne({ where: { id } });

    if (!project) {
      return res.status(404).json({ message: 'Project does not exist' });
    }

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createProjects = async (req, res) => {
  const { name, priority, description } = req.body;

  try {
    const newProject = await Project.create({
      name,
      priority,
      description
    });

    res.json(newProject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, priority, description } = req.body;

  try {
    const project = await Project.findByPk(id);
    project.name = name;
    project.priority = priority;
    project.description = description;
    await project.save();

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    await Project.destroy({
      where: { id }
    });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getProjectTasks = async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await Task.findAll({ where: { projectId: id } });
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProjects,
  getProject,
  createProjects,
  updateProject,
  deleteProject,
  getProjectTasks
};
