const express = require('express')

const router = express.Router();

// Import Controllers
const {
    getProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject
} = require('../controllers/projectController')

// Get all Projects
router.get('/', getProjects)

// Get a single workout
router.get('/:id', getProject) 


// Create Project
router.post('/', createProject)

// Delete Project
router.delete('/:id', deleteProject)

// Update Project
router.patch('/:id', updateProject)


module.exports = router;