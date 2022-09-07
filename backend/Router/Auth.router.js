const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../Models/User');
require('dotenv')
const {registerUser, authUser} = require('../Controllers/UserController')

router.route('/register').post(registerUser);
router.route('/signin').post(authUser)

module.exports = router;