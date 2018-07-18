'use strict';
module.exports = (sequelize, DataTypes) => {
  var employee = sequelize.define('employee', {
    npp: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isUnique: function(value, next){
          employee.find({
            where : {
              npp:value,
            }
          }).then(function(result){
            if(result === null){
              return next()
            }else{
              return next('NPP Sudah Terpakai')
            }
          }).catch(err =>{
              return next()
          })
        }

      },
     
    },

    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,  
      }
    },
  }, {});
  employee.associate = function(models) {
    // associations can be defined here
  };
  return employee;
};