const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = new Schema ({
    project_name: {
        type: String,
        require: true
    },
    project_img: {
        type: String,
        require: true
    },
    author_name: {
        type: String,
        require: true
    },
    author_img: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    github_repo: {
        type: String,
    },
   vercel_link: {
        type: String,
    },
    github_profile: {
        type: String,
    },
    user_id: {
        type: String,
        required: true
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ]

}, {timestamps: true});

module.exports = mongoose.model('Project', projectSchema)