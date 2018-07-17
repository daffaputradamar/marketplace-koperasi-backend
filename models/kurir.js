"use strict";
module.exports = (sequelize, DataTypes) => {
  var Kurir = sequelize.define(
    "Kurir",
    {
      nama: DataTypes.STRING
    },
    {}
  );
  Kurir.associate = function(models) {
    Kurir.hasMany(models.Kurir_Usaha, {
      foreignKey: "id_kurir"
    }),
      Kurir.hasMany(models.Transaksi, {
        foreignKey: "id_kurir"
      });
  };
  return Kurir;
};
