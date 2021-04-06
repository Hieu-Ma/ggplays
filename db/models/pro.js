'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pro = sequelize.define('Pro', {
    content: { type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Pro.associate = function(models) {
    // associations can be defined here
  };
  return Pro;
};
