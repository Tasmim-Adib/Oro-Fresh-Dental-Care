const jwt = require('jsonwebtoken');

const generateToken = (id) =>{
    return jwt.sign({id}, 'orofreshdental', {
        expiresIn : 86400
    })
};

module.exports = generateToken;