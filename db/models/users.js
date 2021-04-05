'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
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
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};
