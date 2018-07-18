const {getAll,addEmployee} = require('../controllers/employeeController')


var express = require('express')
var router = express.Router()

router.get('/',getAll)
router.post('/add', addEmployee)

module.exports = router