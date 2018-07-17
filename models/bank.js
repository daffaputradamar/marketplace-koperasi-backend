"use strict";
module.exports = (sequelize, DataTypes) => {
  var Bank = sequelize.define(
    "Bank",
    {
      nama: DataTypes.STRING
    },
    {}
  );
  Bank.associate = function(models) {
    Bank.hasMany(models.Rekening, {
      foreignKey: "id_bank"
    });
  };
  return Bank;
};
