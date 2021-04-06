'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    type: { type: DataTypes.STRING,
    allowNull: false
    }
  }, {});
  Genre.associate = function(models) {
    // associations can be defined here
    Genre.hasMany(models.Game, {foreignKey: 'genre_id'});
  };
  return Genre;
};
