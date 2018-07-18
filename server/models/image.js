'use strict';
module.exports = (sequelize, DataTypes) => {
  var image = sequelize.define('image', {
    url: DataTypes.STRING,
    article: DataTypes.STRING
  }, {});
  image.associate = function(models) {
    // associations can be defined here
  };
  return image;
};