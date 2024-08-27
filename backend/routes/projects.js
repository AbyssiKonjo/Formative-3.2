const express = require('express')

const router = express.Router();

// Import Controllers
const {
    getProjects,
    createProject
} = require('../controllers/projectController')

router.get('/', getProjects)
router.post('/', createProject)

module.exports = router;