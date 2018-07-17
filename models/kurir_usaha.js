"use strict";
module.exports = (sequelize, DataTypes) => {
  var Kurir_Usaha = sequelize.define("Kurir_Usaha", {}, {});
  Kurir_Usaha.associate = function(models) {
    Kurir_Usaha.belongsTo(models.Usaha, {
      foreignKey: "id_usaha"
    }),
      Kurir_Usaha.belongsTo(models.Kurir, {
        foreignKey: "id_kurir"
      });
  };
  return Kurir_Usaha;
};
