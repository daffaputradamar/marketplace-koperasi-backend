"use strict";
module.exports = (sequelize, DataTypes) => {
  var Produk = sequelize.define(
    "Produk",
    {
      nama: DataTypes.STRING,
      keterangan: DataTypes.STRING,
      foto: DataTypes.STRING,
      harga: DataTypes.INTEGER,
      berat: DataTypes.INTEGER,
      satuan: DataTypes.STRING
    },
    {}
  );
  Produk.associate = function(models) {
    Produk.belongsTo(models.Usaha, {
      foreignKey: "id_usaha"
    }),
      Produk.belongsTo(models.Kategori, {
        foreignKey: "id_kategori"
      }),
      Produk.hasMany(models.Keranjang, {
        foreignKey: "id_produk"
      }),
      Produk.hasMany(models.Detail_Transaksi, {
        foreignKey: "id_produk"
      });
  };
  return Produk;
};
