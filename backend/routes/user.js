const express = require('express');

const router = express.Router();


// Multer JS Initialization
const multer = require('multer')
const path = require("path")

// Multer Storage
const  storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, uniqueSuffix + ext);
    },
});

const upload = multer({storage});


// Controller functions
const {signupUser, loginUser} = require('../controllers/userController')

// Login route:
router.post('/login', loginUser)

// Signup route:
router.post('/signup', upload.single('profile_image'), signupUser)

module.exports = router