"use strict";
module.exports = (sequelize, DataTypes) => {
  var Transaksi = sequelize.define(
    "Transaksi",
    {
      total_bayar: DataTypes.INTEGER,
      total_berat: DataTypes.INTEGER,
      ongkir: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      bukti: DataTypes.STRING
    },
    {}
  );
  Transaksi.associate = function(models) {
    Transaksi.belongsTo(models.Pengguna, {
      foreignKey: "id_pengguna"
    }),
      Transaksi.belongsTo(models.Kurir, {
        foreignKey: "id_kurir"
      }),
      Transaksi.hasMany(models.Detail_Transaksi, {
        foreignKey: "id_transaksi"
      });
  };
  return Transaksi;
};
