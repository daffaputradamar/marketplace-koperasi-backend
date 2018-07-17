"use strict";
module.exports = (sequelize, DataTypes) => {
  var Usaha = sequelize.define(
    "Usaha",
    {
      nama: DataTypes.STRING,
      slogan: DataTypes.STRING,
      keterangan: DataTypes.STRING,
      logo: DataTypes.STRING,
      telp: DataTypes.STRING
    },
    {}
  );
  Usaha.associate = function(models) {
    Usaha.hasMany(models.Produk, {
      foreignKey: "id_usaha"
    }),
      Usaha.hasMany(models.Rekening, {
        foreignKey: "id_usaha"
      }),
      Usaha.hasMany(models.Kurir_Usaha, {
        foreignKey: "id_usaha"
      });
  };
  return Usaha;
};
