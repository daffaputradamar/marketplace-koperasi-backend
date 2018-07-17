"use strict";
module.exports = (sequelize, DataTypes) => {
  var Detail_Transaksi = sequelize.define(
    "Detail_Transaksi",
    {
      jumlah: DataTypes.INTEGER,
      subtotal: DataTypes.INTEGER
    },
    {}
  );
  Detail_Transaksi.associate = function(models) {
    Detail_Transaksi.belongsTo(models.Produk, {
      foreignKey: "id_produk"
    }),
      Detail_Transaksi.belongsTo(models.Transaksi, {
        foreignKey: "id_transaksi"
      });
  };
  return Detail_Transaksi;
};
