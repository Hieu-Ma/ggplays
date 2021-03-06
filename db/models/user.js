'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false
    },
    hashed_password: {
      type: DataTypes.STRING.BINARY,
      allowNull: false
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Review, { foreignKey: 'user_id' })
    User.hasMany(models.Gameshelf, { foreignKey: 'user_id' })
    
  };
  return User;
};