const {
    user,
    sequelize
} = require('../models')
const jwt = require('jsonwebtoken')
const bcs = require('bcryptjs')

module.exports = {
    register: function (req, res) {

       
        let username = '05606'
        let password = '12345'
        user.findOne({
            username: '05606'
          }).then(data => {
            if (data) {
              res.status(202).json({
                message: 'Username Already Taken'
              })
            }
            else{
                var salt = bcs.genSaltSync(10)                                                                                                                                     
        newpassword  = bcs.hashSync(password, salt) 

        let payload = {
             username : username,
             password : newpassword,
        }

         user.create(payload)
       
        // sequelize.query('INSERT INTO users VALUES (:id,:username,:password,:createdAt,:updatedAt)',
        // { replacements: payload , type: sequelize.QueryTypes.SELECT }
        // )
            .then(response => {
                console.log('ini datanya '+response)
                
                let token = jwt.sign(payload, process.env.SECRETKEY)
                res.status(200).json({
                    message: 'register success',
                    data: response,
                    token: token
                })
            })
            .catch(err => {
                console.log('ini error'+err);
                
                res.status(500).json({
                    message: 'register failed',
                    err
                })
            })
            }
      
          }).catch(err => {
            console.log(err);
      
          })
      
        
    },

    login: function(req,res) {
        user.findOne({
            where: {username: req.body.username}
          })
            .then(response=>{
                console.log('ini responseeeee'+response)
                
               if(response){
                   let result = bcs.compareSync(req.body.password,response.password)
                   if(result){
                       let payload = {
                        username : response.username,
                        password : response.password,
                       }
                       let token = jwt.sign(payload, process.env.SECRETKEY)
                       res.status(200).json({
                           message : 'get data success',
                           username: response.username,
                           token: token
                       })
                   }
                   else{
                       res.status(202).json({
                           
                           message: 'wrong username/password'
                       })
                   }
                  
               }
               else{
                res.status(202).json({
                    message: 'wrong username/password'
                })
               }
            })
            .catch(err=>{
                console.log(err);
                
                res.status(500).json({
                    message: 'get data failed',
                    err
                })
            })
    }

}