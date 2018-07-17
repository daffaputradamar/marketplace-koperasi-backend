"use strict";
module.exports = (sequelize, DataTypes) => {
  var Kategori = sequelize.define(
    "Kategori",
    {
      nama: DataTypes.STRING
    },
    {}
  );
  Kategori.associate = function(models) {
    Kategori.hasMany(models.Produk, {
      foreignKey: "id_kategori"
    });
  };
  return Kategori;
};
