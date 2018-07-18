const {register,login} = require('../controllers/userController')

var express = require('express')
var router = express.Router()

router.post('/register',register)
router.post('/login',login)

module.exports = router;
