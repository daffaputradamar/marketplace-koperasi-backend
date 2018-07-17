"use strict";
module.exports = (sequelize, DataTypes) => {
  var Keranjang = sequelize.define(
    "Keranjang",
    {
      jumlah: DataTypes.INTEGER,
      subtotal: DataTypes.INTEGER
    },
    {}
  );
  Keranjang.associate = function(models) {
    Keranjang.belongsTo(models.Produk, {
      foreignKey: "id_produk"
    }),
      Keranjang.belongsTo(models.Pengguna, {
        foreignKey: "id_pengguna"
      });
  };
  return Keranjang;
};
