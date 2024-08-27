const Project = require('../models/projectModel')

const mongoose = require('mongoose')

const getProjects = async (req, res) => {
    const projects = await Project.find({}).sort({createdAt: -1})
    res.status(200).json(projects)
}

const createProject = async (req, res) => {
    const { project_name, project_img, author_name, author_img, description, github_repo, vercel_link, github_profile } = req.body

    try {
        const project = await Project.create({ project_name, project_img, author_name, author_img, description, github_repo, vercel_link, github_profile })
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getProjects,
    createProject
}