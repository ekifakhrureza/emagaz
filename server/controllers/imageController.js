const {
    image,sequelize
} = require('../models')

module.exports = {
    getAll: function (req, res) {

        image.findAll()
        // sequelize.query('SELECT * FROM employees', { type: sequelize.QueryTypes.SELECT})
        .then(response => {
            console.log('masuk imageeee');
            
            res.status(200).json({
                message: 'get data image success',
                data: response
            })
            // We don't need spread here, since only the results will be returned for select queries
        })
            
            .catch(err => {
                console.log('dan ternyata image errror '+err);
                
                res.status(500).json({
                    message: 'get data image failed',
                    err
                })
            })
    }
  
}