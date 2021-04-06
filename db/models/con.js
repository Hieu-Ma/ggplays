'use strict';
module.exports = (sequelize, DataTypes) => {
  const Con = sequelize.define('Con', {
    content: { type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Con.associate = function(models) {
    // associations can be defined here
    Con.hasMany(models.Review, { foreignKey: 'con_id' })
  };
  return Con;
};
