'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    year_released: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    developer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Game.associate = function (models) {
    // associations can be defined here
    Game.belongsTo(models.Genre, { foreignKey: 'genre_id' })
    Game.hasMany(models.Shelf, { foreignKey: 'game_id' })
  };
  return Game;
};
