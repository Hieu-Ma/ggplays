'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pro_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    con_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Game, { foreignKey: 'game_id' })
    Review.belongsTo(models.User, { foreignKey: 'user_id' })
    Review.belongsTo(models.Pro, { foreignKey: 'pro_id' })
    Review.belongsTo(models.Con, { foreignKey: 'con_id' })
  };
  return Review;
};