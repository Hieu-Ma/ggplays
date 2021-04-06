'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gameshelf = sequelize.define('Gameshelf', {
    title: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  Gameshelf.associate = function(models) {
    // associations can be defined here
    Gameshelf.belongsTo(models.User, { foreignKey: 'user_id' });
    Gameshelf.hasMany(models.Shelf, { foreignKey: 'game_shelf_id' });
  };
  return Gameshelf;
};
