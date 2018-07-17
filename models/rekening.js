"use strict";
module.exports = (sequelize, DataTypes) => {
  var Rekening = sequelize.define(
    "Rekening",
    {
      nama: DataTypes.STRING,
      no: DataTypes.STRING
    },
    {}
  );
  Rekening.associate = function(models) {
    Rekening.belongsTo(models.Usaha, {
      foreignKey: "id_usaha"
    }),
      Rekening.belongsTo(models.Bank, {
        foreignKey: "id_bank"
      });
  };
  return Rekening;
};
