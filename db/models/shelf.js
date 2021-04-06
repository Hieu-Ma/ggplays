'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shelf = sequelize.define('Shelf', {
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    game_shelf_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Shelf.associate = function(models) {
    // associations can be defined here
  };
  return Shelf;
};