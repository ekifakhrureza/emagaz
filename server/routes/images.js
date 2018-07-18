const {getAll} = require('../controllers/imageController')
const { auth } = require('../middlewares/auth')

var express = require('express')
var router = express.Router()

router.get('/', auth,getAll)

module.exports = router