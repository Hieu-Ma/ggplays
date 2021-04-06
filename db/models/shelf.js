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
    Shelf.hasMany(models.Game, { foreignKey: 'game_id' });
    Shelf.belongsTo(models.Gameshelf, { foreignKey: 'game_shelf_id' });
  };
  return Shelf;
};
