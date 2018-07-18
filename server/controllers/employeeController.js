const {
    employee,sequelize
} = require('../models')

module.exports = {
    getAll: function (req, res) {

        employee.findAll()
        // sequelize.query('SELECT * FROM employees', { type: sequelize.QueryTypes.SELECT})
        .then(response => {
            console.log('masuk siniiii');
            
            res.status(200).json({
                message: 'get data success',
                data: response
            })
            // We don't need spread here, since only the results will be returned for select queries
        })
            
            .catch(err => {
                console.log('dan ternyata errror '+err);
                
                res.status(500).json({
                    message: 'get data failed',
                    err
                })
            })
    },
    addEmployee: function (req, res) {
        console.log(req.body)
        
        let npp = req.body.npp
        let name = req.body.name
        
        employee.create({
            npp: npp,
            name: name,
          }).then(response => {
          res.status(200).json({
            message: 'success insert data',
            data: response
          })
        }).catch(err => {
          res.status(500).json({
            message: 'insert error',
            err
          })
        })
      },
}