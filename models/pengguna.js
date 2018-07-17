"use strict";
module.exports = (sequelize, DataTypes) => {
  var Pengguna = sequelize.define(
    "Pengguna",
    {
      nama: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  Pengguna.associate = function(models) {
    Pengguna.belongsTo(models.Usaha, {
      foreignKey: "id_usaha"
    }),
      Pengguna.hasMany(models.Keranjang, {
        foreignKey: "id_pengguna"
      }),
      Pengguna.hasMany(models.Transaksi, {
        foreignKey: "id_pengguna"
      });
  };
  return Pengguna;
};
